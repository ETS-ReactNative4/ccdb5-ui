import React from 'react'
import configureMockStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux'
import { shallow } from 'enzyme';
import ReduxFederalState, {FederalState, mapDispatchToProps} from '../FederalState'

const fixture = [
  {
    "key": "DC",
    "doc_count": 999
  }
]

function setupEnzyme() {
  const props = {
    options: fixture,
    forTypeahead: [
      {key: 'AZ', label: 'Arizona (AZ)', normalized: 'arizona (az)'},
      {key: 'DC', label: 'District of Columbia (DC)', normalized: 'dc'},
      {key: 'MD', label: 'Maryland (MD)', normalized: 'maryland (md)'},
      {key: 'WY', label: 'Wyoming (WY)', normalized: 'wyoming (wy)'}
    ],
    showChildren: true,
    typeaheadSelect: jest.fn()
  }

  const target = shallow(<FederalState {...props} />);

  return {
    props,
    target
  }
}

function setupSnapshot() {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore({
    query: {
      state: ['DC']
    },
    aggs: {
      state: fixture
    }
  })

  return renderer.create(
    <Provider store={store}>
      <IntlProvider locale="en">
         <ReduxFederalState />
      </IntlProvider>
    </Provider>
  )
}

describe('component::FederalState', () => {
  describe('initial state', () => {
    it('renders without crashing', () => {
      const target = setupSnapshot()
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Typeahead interface', () => {
    let target, props
    beforeEach(() => {
      ({target, props} = setupEnzyme())
    })

    describe('_onInputChange', () => {
      it('produces a custom array of matches', () => {
        const actual = target.instance()._onInputChange('AR')
        expect(actual.length).toEqual(2)
      })
    })

    describe('_renderOption', () => {
      it('produces a custom component', () => {
        const options = target.instance()._onInputChange('ARI')
        const actual = target.instance()._renderOption(options[0])
        expect(actual).toEqual({
          value: 'AZ',
          component: expect.anything()
        })
      })
    })

    describe('_onOptionSelected', () => {
      it('checks all the filters associated with the option', () => {
        const key = "WY"
        target.instance()._onOptionSelected({key})
        expect(props.typeaheadSelect).toHaveBeenCalledWith(key)
      })
    })
  })

  describe('mapDispatchToProps', () => {
    it('hooks into addMultipleFilters', () => {
      const dispatch = jest.fn()
      mapDispatchToProps(dispatch).typeaheadSelect('baz')
      expect(dispatch.mock.calls.length).toEqual(1)
    })
  })
})


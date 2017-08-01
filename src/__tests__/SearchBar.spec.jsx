import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { SearchBar, mapDispatchToProps } from '../SearchBar'
import * as types from '../constants'

function setup(initialText) {
  const props = {
    forTypeahead: [
      {key: 'Foo', normalized: 'foo'},
      {key: 'Bar', normalized: 'bar'},
      {key: 'Baz', normalized: 'baz'}
    ],
    searchText: initialText,
    searchField: 'all',
    onSearch: jest.fn()
  }

  const target = mount(<SearchBar {...props} />)

  return {
    props,
    target
  }
}

describe('component:SearchBar', () =>{
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((url) => {
      expect(url).toContain('@@API_suggest/?text=')

      return new Promise((resolve) => {
        resolve({
          json: function() { 
            return ['foo', 'bar', 'baz', 'qaz']
          }
        })
      })
    })
  })

  it('receives updates when the parent state changes', () => {
    const node = document.createElement('div')
    const target = ReactDOM.render(<SearchBar searchText="foo" />, node)

    ReactDOM.render(<SearchBar searchText="bar" />, node)
    expect(target.state.inputValue).toEqual('bar')
  })

  it('calls the callback when the form is submitted', () => {
    const { target, props } = setup('bar')
    const theForm = target.find('form')

    theForm.simulate('submit', { preventDefault: () => {} })
    expect(props.onSearch).toHaveBeenCalledWith('bar', 'all')  
  })

  it('allows the user to select the field to search within', () => {
    const { target } = setup('foo')
    const dropDown = target.find('#searchField')

    dropDown.simulate('change', {target: { value: 'company'}})
    expect(target.state('searchField')).toEqual('company')
  })

  describe('Typeahead interface', () => {
    let target, props
    beforeEach(() => {
      ({target, props} = setup('BAR'))
    })

    describe('_onInputChange', () => {
      it('provides a promise', () => {
        const {target} = setup()
        const actual = target.instance()._onInputChange('BA')
        expect(actual.then).toBeInstanceOf(Function)
      })
    })

    describe('_renderOption', () => {
      it('produces a custom component', () => {
        const {target, props} = setup()
        const option = {
          ...props.forTypeahead[0],
          position: 0,
          value: 'FOO'
        }
        const actual = target.instance()._renderOption(option)
        expect(actual).toEqual({
          value: 'Foo',
          component: expect.anything()
        })
      })
    })

    describe('_onTypeaheadSelected', () => {
      it('handles objects', () => {
        const key = 'Bank'
        target.instance()._onTypeaheadSelected({key})
        expect(target.state('inputValue')).toEqual('Bank')
      })

      it('handles strings', () => {
        const key = 'Bank'
        target.instance()._onTypeaheadSelected(key)
        expect(target.state('inputValue')).toEqual('Bank')
      })

      it('sets the focus on the submit button', () => {
        const instance = target.instance()
        instance.submitButton.focus = jest.fn()

        instance._onTypeaheadSelected('foo')
        expect(instance.submitButton.focus).toHaveBeenCalled()
      })
    })
  })

  describe('mapDispatchToProps', () => {
    it('hooks into onSearch', () => {
      const dispatch = jest.fn()
      mapDispatchToProps(dispatch).onSearch('foo', 'bar')
      expect(dispatch.mock.calls.length).toEqual(1)
    })
  })
})

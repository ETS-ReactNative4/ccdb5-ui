import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import Typeahead from '..'
import * as keys from '../../constants'

function setupEnzyme(initalProps={}) {
  const props = Object.assign({
    onInputChange: jest.fn((x) => ['alpha', 'beta', 'gamma']),
    onOptionSelected: jest.fn(),
    renderOption: jest.fn()
  }, initalProps)

  const target = shallow(<Typeahead {...props} />);

  return {
    props,
    target
  }
}

function setupSnapshot(initialValue='') {
  return renderer.create(<Typeahead value={initialValue}
                                    onInputChange={jest.fn()}
                                    onOptionSelected={jest.fn()}
                         />)
}

describe('component::Typeahead', () => {
  describe('render phases', () => {
    it('renders the EMPTY phase', () => {
      const target = setupSnapshot()
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the ERROR phase', () => {
      const target = setupSnapshot()
      target.getInstance().setState({phase: 'ERROR'})
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the ACCUM phase', () => {
      const target = setupSnapshot('i')
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the WAITING phase', () => {
      const target = setupSnapshot('indubitably')
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the NO_RESULTS phase', () => {
      const target = setupSnapshot()
      target.getInstance()._setOptions([])
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the RESULTS phase', () => {
      const target = setupSnapshot()
      target.getInstance()._setOptions(['foo'])
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the TOO_MANY phase', () => {
      const target = setupSnapshot()
      target.getInstance()._setOptions(['foo', 'bar', 'baz', 'qaz', 'quux', 'nuux'])
      const tree = target.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('focus/blur', () => {
    it('pushes the current state on blur', () => {
      const { target } = setupEnzyme({value: 'foo'})
      expect(target.state('phase')).toEqual('WAITING')
      target.simulate('blur')
      expect(target.state('phase')).toEqual('NOT_FOCUSED')
      expect(target.instance().stateHistory.length).toEqual(2)
    })

    it('restores the state on focus', () => {
      const { target } = setupEnzyme({value: 'foo'})
      expect(target.instance().stateHistory.length).toEqual(1)
      target.simulate('focus')
      expect(target.state('phase')).toEqual('WAITING')
      expect(target.instance().stateHistory.length).toEqual(0)
    })
  })

  describe('text control', () => {
    let target, props, input
    beforeEach(() => {
      ({target, props} = setupEnzyme())
      input = target.find('input')
    })

    it('requires a minimum number of characters before calling for options', () => {
      input.simulate('change', {target: { value: 'b'}})
      expect(target.state('inputValue')).toEqual('b')
      expect(props.onInputChange).not.toHaveBeenCalled()
    })

    it('calls for options when the threshhold has been reached', () => {
      input.simulate('change', {target: { value: 'bar'}})
      expect(target.state('inputValue')).toEqual('bar')
      expect(props.onInputChange).toHaveBeenCalledWith('bar')
    })
  })

  describe('keyboard events', () => {
    let fixture, target, props, input
    beforeEach(() => {
      ({target, props} = setupEnzyme())
      input = target.find('input')
      fixture = {
        preventDefault: jest.fn()
      }
    })

    it('ignores unknown keys', () => {
      fixture.which = 999
      input.simulate('keydown', fixture)
      expect(fixture.preventDefault).not.toHaveBeenCalled()
    })

    it('resets the control when "ESC" is pressed', () => {
      input.simulate('change', {target: { value: 'bar'}})
      expect(target.state('phase')).toEqual('RESULTS')
      
      fixture.which = keys.VK_ESCAPE
      input.simulate('keydown', fixture)

      expect(target.state('inputValue')).toEqual('')
      expect(target.state('phase')).toEqual('EMPTY')
      expect(fixture.preventDefault).toHaveBeenCalled()
    })

    describe('"DOWN" key', () => {
      it('has no effect when there are no options', () => {
        fixture.which = keys.VK_DOWN
        input.simulate('keydown', fixture)

        expect(target.state('selectedIndex')).toEqual(-1)
        expect(fixture.preventDefault).toHaveBeenCalled()
      })

      it('selects the first option when there is no selection', () => {
        input.simulate('change', {target: { value: 'bar'}})
        fixture.which = keys.VK_DOWN
        input.simulate('keydown', fixture)

        expect(target.state('selectedIndex')).toEqual(0)
      })

      it('has no effect when the last item is selected', () => {
        target.instance().setState({
          selectedIndex: 2,
          searchResults: ['foo', 'bar', 'baz']
        })

        fixture.which = keys.VK_DOWN
        input.simulate('keydown', fixture)

        expect(target.state('selectedIndex')).toEqual(2)
      })
    })

    describe('"UP" key', () => {
      it('has no effect when the first item is selected', () => {
        target.instance().setState({
          selectedIndex: 0,
          searchResults: ['foo', 'bar', 'baz']
        })

        fixture.which = keys.VK_UP
        input.simulate('keydown', fixture)

        expect(target.state('selectedIndex')).toEqual(0)
      })
    })

    describe('ENTER/TAB', () => {
      it('has no effect when there are no options', () => {
        fixture.which = keys.VK_ENTER
        input.simulate('keydown', fixture)
        expect(props.onOptionSelected).not.toHaveBeenCalled()
      })

      it('chooses the first option when there is no selection', () => {
        input.simulate('change', {target: { value: 'bar'}})
        fixture.which = keys.VK_TAB
        input.simulate('keydown', fixture)

        expect(props.onOptionSelected).toHaveBeenCalledWith('alpha')
      })

      it('selects the highlighted option when "TAB" is pressed', () => {
        input.simulate('change', {target: { value: 'bar'}})
        target.instance().setState({
          selectedIndex: 1
        })
        fixture.which = keys.VK_TAB
        input.simulate('keydown', fixture)

        expect(props.onOptionSelected).toHaveBeenCalledWith('beta')
      })
    })
  })
})

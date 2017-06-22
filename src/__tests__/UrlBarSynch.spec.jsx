import React from 'react';
import { UrlBarSynch, mapDispatchToProps } from '../UrlBarSynch';
import * as types from '../constants'

describe('component:UrlBarSynch', () =>{
  let target;
  let props;
  beforeEach(() => {
    props = {
      params: {
        searchText: '',
        from: 0,
        size: 10
      },
      onUrlChanged: jest.fn()
    }

   target = new UrlBarSynch(props);
   target.history.push = jest.fn()
  });

  describe('componentWillReceiveProps', () => {
    it('pushes a change to the url bar when parameters change', () => {
      props.params.from = 99
      const expected = '?from=99&searchText=&size=10'

      target.componentWillReceiveProps(props)

      expect(target.currentQS).toEqual(expected)
      expect(target.history.push).toHaveBeenCalledWith({ search: expected })
    })

    it('does not push history when parameters are the same', () => {
      target.currentQS = '?from=0&searchText=&size=10'
      target.componentWillReceiveProps(props)
      expect(target.history.push).not.toHaveBeenCalled()
    })
  })

  describe('_onUrlChanged', () => {
    it('does nothing when the action is not "POP"', () => {
      target._onUrlChanged({search: '?foo=bar'}, 'PUSH');
      expect(props.onUrlChanged).not.toHaveBeenCalled();
    });

    it('calls the provided callback when the POP action happens', () => {
      target._onUrlChanged({search: '?foo=bar'}, 'POP');
      expect(target.currentQS).toEqual('?foo=bar')
      expect(props.onUrlChanged).toHaveBeenCalledWith({search: '?foo=bar'});
    });
  });

  describe('mapDispatchToProps', () => {
    it('hooks into announceUrlChanged', () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onUrlChanged({});
      expect(dispatch.mock.calls.length).toEqual(1);
    })
  })
})

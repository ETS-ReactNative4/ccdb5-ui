import target, { filterArrayAction, toggleFilter } from '../query'
import * as types from '../../constants'

describe('reducer:query', () => {
  it('has a default state', () => {
    expect(target(undefined, {})).toEqual({
        searchText: '',
        from: 0,
        size: 10,
        sort: 'relevance_desc'
      })
  })

  it('handles SEARCH_CHANGED actions', () => {
    const action = {
      type: types.SEARCH_CHANGED,
      searchText: 'foo',
      searchType: 'bar',
    }
    const state = {
      from: 80,
      size: 100
    }
    expect(target(state, action)).toEqual({
        searchText: 'foo',
        from: 0,
        size: 100
      })
  })

  it('handles PAGE_CHANGED actions', () => {
    const action = {
      type: types.PAGE_CHANGED,
      page: 2
    }
    const state = {
      size: 100
    }
    expect(target(state, action)).toEqual({
        from: 100,
        size: 100
      })
  })

  it('handles SIZE_CHANGED actions', () => {
    const action = {
      type: types.SIZE_CHANGED,
      size: 50
    }
    const state = {
      size: 100
    }
    expect(target(state, action)).toEqual({
        from: 0,
        size: 50
      })
  })

  it('handles SORT_CHANGED actions', () => {
    const action = {
      type: types.SORT_CHANGED,
      sort: 'foo'
    }
    const state = {
      from: 100,
      size: 100
    }
    expect(target(state, action)).toEqual({
        from: 100,
        sort: 'foo',
        size: 100
      })
  })

  describe('URL_CHANGED actions', () => {
    let action = null
    let state = null
    beforeEach(() => {
      action = {
        type: types.URL_CHANGED,
        params: {}
      }

      state = {
        searchText: '',
        from: 99,
        size: 99
      }
    })

    it('handles empty params', () => {
      expect(target(state, action)).toEqual(state)
    })

    it('converts some parameters to integers', () => {
      // Writing it this way helps with branch coverage
      action.params = { size: '100' }
      expect(target({}, action)).toEqual({ size: 100 })

      action.params = { from: '10' }
      expect(target({}, action)).toEqual({ from: 10 })
    })

    it('ignores unknown parameters', () => {
      action.params = {
        searchText: 'hello',
        foo: 'bar'
      }

      expect(target(state, action)).toEqual({
        searchText: 'hello',
        from: 99,
        size: 99
      })
    })
  })

  describe('FILTER_CHANGED actions updates query with filter state', () => {
    let key = ''
    let state = null
    let filterName = ''
    let filterValue = null
    let action = null

    beforeEach(() => {
      key = 'affirmative';
      filterName = 'filtyMcFilterson';
      filterValue = { key };
      state = { };
      action = { type: types.FILTER_CHANGED, filterName, filterValue };
    });

    it('handles FILTER_CHANGED actions and returns correct object', () => {
      expect(target(state, action)).toEqual(
        { [filterName]: [key] }
      );
    });

    it('creates a filter array if target is undefined', () => {
      let filterReturn = filterArrayAction(undefined, key);
      expect(filterReturn).toEqual([key]);
    });

    it('adds additional filters when passed', () => {
      let filterReturn = filterArrayAction([key], 'bye');
      expect(filterReturn).toEqual([key, 'bye']);
    });

    it('removes filters when already present', () => {
      let filterReturn = filterArrayAction([key, 'bye'], key);
      expect(filterReturn).toEqual(['bye']);
    });

  });
})

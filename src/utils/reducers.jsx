/**
 * contains common utility functions we use in the reducers
 */

import * as types from '../constants'

/**
 * helper function to enforce valid values when someone pastes in a url
 * @param {string | int} value input val to check
 * @param {string} field key of the query object we need to validate
 * @returns {string|int|*} valid value
 */
export const enforceValues = ( value, field ) => {
  const valMap = {
    chartType: {
      defaultVal: 'line',
      values: [ 'line', 'area' ]
    },
    dataNormalization: {
      defaultVal: types.GEO_NORM_NONE,
      values: [ types.GEO_NORM_NONE, types.GEO_NORM_PER1000 ]
    },
    dateInterval: {
      defaultVal: 'Month',
      values: types.dateIntervals
    },
    dateRange: {
      defaultVal: '3y',
      values: types.dateRanges
    },
    lens: {
      defaultVal: 'Overview',
      values: types.lenses
    },
    searchField: {
      defaultVal: 'all',
      values: [ 'all', 'company', 'complaint_what_happened' ]
    },
    size: {
      defaultVal: 10,
      values: Object.keys( types.sizes ).map( o => parseInt( o, 10 ) )
    },
    sort: {
      defaultVal: 'created_date_desc',
      values: Object.keys( types.sorts )
    },
    tab: {
      defaultVal: types.MODE_MAP,
      values: [ types.MODE_MAP, types.MODE_TRENDS, types.MODE_LIST ]
    }
  }
  if ( valMap[field] ) {
    const validValues = valMap[field]
    if ( validValues.values.includes( value ) ) {
      return value
    }
    return validValues.defaultVal
  }

  return value
}

/* eslint-disable camelcase */

import * as sut from '../formatDate';

// ----------------------------------------------------------------------------
// Tests

describe( 'formatDate', function() {
  it( 'converts a string to pretty date format', function() {
    const actual = sut.formatDate( 'Dec 12, 1980' );
    expect( actual ).toEqual( '1980-12-12' );
  } );

  it( 'converts a date object ', function() {
    const actual = sut.formatDate( new Date( 'January 12, 1980' ) );
    expect( actual ).toEqual( '1980-01-12' );
  } );

  it( 'converts string to view model ', function() {
    const actual = sut.formatDateView( new Date( 'January 12, 1980' ) );
    expect( actual ).toEqual( '01/12/1980' );
  } );

  it( 'converts string to data model ', function() {
    const actual = sut.formatDateModel( new Date( 'January 12, 1980' ) );
    expect( actual ).toEqual( '1980-01-12' );
  } );

  it( 'compares dates', function() {
    let actual = sut.compareDates( '2012-12-1', '2012-12-1' );
    expect( actual ).toEqual( 0 );
    actual = sut.compareDates( '2014-12-1', '2012-12-1' );
    expect( actual ).toEqual( 1 );
    actual = sut.compareDates( '2012-12-1', '2014-12-1' );
    expect( actual ).toEqual( -1 );
  } );
} );

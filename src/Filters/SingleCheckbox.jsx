import { changeFlagFilter } from '../actions/filter'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

export class SingleCheckbox extends React.Component {
  constructor( props ) {
    super( props )
    this.state = { isChecked: this.props.isChecked }
  }

  componentWillReceiveProps( nextProps ) {
    const newState = {
      isChecked: nextProps.isChecked
    }
    this.setState( newState )
  }

  componentDidUpdate() {
    this.props.changeFlagFilter( this.props.fieldName, this.state.isChecked )
  }

  render() {
    return (
      <section className="single-checkbox">
        <h5>{this.props.title}</h5>
        <div className="m-form-field m-form-field__checkbox">
            <input className="a-checkbox"
                   id="theCheckbox"
                   type="checkbox"
                   onClick={ this._changeFlag.bind( this ) }
                   checked={ this.state.isChecked }
                   value={ this.props.fieldName } />
            <label className="a-label" htmlFor="theCheckbox">Yes</label>
        </div>
      </section>
    )
  }

  // --------------------------------------------------------------------------
  // Helper Methods

  _changeFlag( ) {
    const newState = {
      isChecked: !this.state.isChecked
    }
    this.setState( newState )
  }
}

// ----------------------------------------------------------------------------
// Meta

SingleCheckbox.propTypes = {
  fieldName: PropTypes.string.isRequired,
  isChecked: PropTypes.bool
}

SingleCheckbox.defaultProps = {
  isChecked: false
}

export const mapStateToProps = state => {
  var queryValue = state.query.has_narrative
  return {
    isChecked: typeof queryValue !== 'undefined' &&
      ( queryValue.toString() === 'yes' ||
        queryValue.toString() === 'true' )
  }
}

export const mapDispatchToProps = dispatch => ( {
  changeFlagFilter: ( fieldName, isChecked ) => {
    dispatch( changeFlagFilter( fieldName, isChecked ) )
  }
} )

export default connect( mapStateToProps, mapDispatchToProps )( SingleCheckbox )

import React from 'react'
import { connect } from 'react-redux'
import AggregationItem from './AggregationItem'
import SimpleCollapsibleFilter from './SimpleCollapsibleFilter'
import MoreOrLess from './MoreOrLess'
import './Aggregation.less'

export class SimpleFilter extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      showChildren: nextProps.showChildren
    });
  }

  render() {
    const listComponentProps = {
      fieldName: this.props.fieldName
    }

    return (
      <SimpleCollapsibleFilter title={this.props.title}
                               desc={this.props.desc}
                               showChildren={this.props.showChildren}
                               className="aggregation">
         <MoreOrLess listComponent={AggregationItem}
                     listComponentProps={listComponentProps}
                     options={this.props.options}
         />
      </SimpleCollapsibleFilter>
    )
  }
}

export const mapStateToProps = (state, ownProps) => {
  // Find all query filters that refer to the field name
  const activeChildren = state.query[ownProps.fieldName] || []

  return {
    options: state.aggs[ownProps.fieldName] || [],
    showChildren: activeChildren.length > 0
  }
}

export default connect(mapStateToProps)(SimpleFilter)

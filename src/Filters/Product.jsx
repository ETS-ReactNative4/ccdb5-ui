import React from 'react'
import { connect } from 'react-redux'
import { SLUG_SEPARATOR } from '../constants'
import AggregationBranch from './AggregationBranch'
import CollapsibleFilter from './CollapsibleFilter'
import MoreOrLess from './MoreOrLess'
import { sortSelThenCount } from './utils'

export class Product extends React.Component {
  constructor(props) {
    super(props)

    this._onBucket = this._onBucket.bind(this)
  }

  render() {
    const listComponentProps = {
      fieldName: 'product'
    }

    return (
      <CollapsibleFilter title="Product / sub-product"
                         desc="The type of product and sub-product the consumer identified in the complaint"
                         showChildren={this.props.showChildren}
                         className="aggregation">
        <MoreOrLess listComponent={AggregationBranch}
                    listComponentProps={listComponentProps}
                    options={this.props.options}
                    perBucketProps={this._onBucket} />
      </CollapsibleFilter>
    )
  }

  // --------------------------------------------------------------------------
  // MoreOrLess Helpers

  _onBucket(bucket, props) {
    props.subitems = bucket['sub_product.raw'].buckets
    return props
  }
}

export const mapStateToProps = state => {
  // See if there are an active product filters
  const allProducts = state.query.product || []
  const selections = []

  // Reduce the products to the parent keys (and dedup)
  allProducts.forEach(x => {
    const idx = x.indexOf(SLUG_SEPARATOR)
    const key = (idx !== -1) ? x.substr(0, idx) : x
    if (selections.indexOf(key) === -1)  {
      selections.push(key)
    }
  })

  // Make a cloned, sorted version of the aggs
  const options = sortSelThenCount(state.aggs.product, selections)

  return {
    options
  }
}

export default connect(mapStateToProps)(Product)

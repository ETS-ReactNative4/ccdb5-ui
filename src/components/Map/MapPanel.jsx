import '../RefineBar/RefineBar.less'
import ActionBar from '../ActionBar'
import { connect } from 'react-redux'
import DateRanges from '../RefineBar/DateRanges'
import ErrorBlock from '../Warnings/Error'
import FilterPanel from '../Filters/FilterPanel'
import FilterPanelToggle from '../Filters/FilterPanelToggle'
import Loading from '../Dialogs/Loading'
import MapToolbar from './MapToolbar'
import { mapWarningDismissed } from '../../actions/view'
import PerCapita from '../RefineBar/PerCapita'
import { processBars } from '../../utils/chart'
import React from 'react'
import RowChart from '../Charts/RowChart'
import { Separator } from '../RefineBar/Separator'
import StaleDataWarnings from '../Warnings/StaleDataWarnings'
import TileChartMap from '../Charts/TileChartMap'
import Warning from '../Warnings/Warning'


const WARNING_MESSAGE = '“Complaints per' +
  ' 1,000 population” is not available with your filter selections.'

export class MapPanel extends React.Component {
  // eslint-disable-next-line complexity
  render() {
    return (
      <section className="map-panel">
        <ActionBar/>
        <StaleDataWarnings />
        { this.props.error &&
          <ErrorBlock text="There was a problem executing your search" />
        }
        { this.props.showWarning &&
          <Warning text={ WARNING_MESSAGE }
                   closeFn={this.props.onDismissWarning}/> }
        { this.props.showMobileFilters && <FilterPanel/> }
        <div className="layout-row refine-bar">
          <FilterPanelToggle/>
          <Separator />
          <DateRanges/>
          <PerCapita/>
        </div>
        <TileChartMap/>
        <MapToolbar/>
        <RowChart id="product"
                  colorScheme={this.props.productData.colorScheme}
                  data={this.props.productData.data}
                  title="Product by highest complaint volume"/>
        <RowChart id="issue"
                  colorScheme={this.props.issueData.colorScheme}
                  data={this.props.issueData.data}
                  title="Issue by highest complaint volume"/>
        <Loading isLoading={ this.props.isLoading || false }/>
      </section>
    )
  }
}

const mapStateToProps = state => {
  const { map, query } = state

  const {
    error,
    isLoading,
    results
  } = map

  const {
    enablePer1000,
    issue: issueFilters,
    mapWarningEnabled,
    product: productFilters
  } = query

  return {
    error,
    isLoading,
    issueData: processBars( issueFilters, results.issue, false ),
    productData: processBars( productFilters, results.product, false ),
    showMobileFilters: state.view.width < 750,
    showWarning: !enablePer1000 && mapWarningEnabled
  }
}

export const mapDispatchToProps = dispatch => ( {
  onDismissWarning: () => {
    dispatch( mapWarningDismissed() )
  }
} )


export default connect( mapStateToProps, mapDispatchToProps )( MapPanel )

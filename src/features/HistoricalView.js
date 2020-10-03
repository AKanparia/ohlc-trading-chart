import React from 'react'
import { Dashboard, ChartWithFeatures } from '../components'

function HistoricalView({ data, isLoading, isError }) {
  return (
    <Dashboard title='Historical Overview'>
      <ChartWithFeatures dataStream={data} />
    </Dashboard>
  )
}

export default HistoricalView

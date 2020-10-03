import React from 'react'
import { Dashboard } from '../components'

function HistoricalView({ data, isLoading, isError }) {
  return (
    <Dashboard title='Historical Overview'>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </Dashboard>
  )
}

export default HistoricalView

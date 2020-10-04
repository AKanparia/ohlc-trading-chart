import React from 'react'
import Chart from './Chart'
import SymbolStatus from './SymbolStatus'

function InfoCard({ label, value }) {
  return (
    <div className='info-card'>
      <div className='label'>{label}</div>
      <div className='value'>{value}</div>
    </div>
  )
}

function ChartInfoCards({ open, close, high, low }) {
  return (
    <div className='chart-info'>
      <InfoCard label='Open' value={open} />
      <InfoCard label='Close' value={close} />
      <InfoCard label='High' value={high} />
      <InfoCard label='Low' value={low} />
    </div>
  )
}

function ChartWithFeatures({ dataStream = [], data, isLive }) {
  const [selectedData, setSelectedData] = React.useState(
    dataStream[dataStream.length - 1] || {}
  )
  return (
    <div className='chart-container'>
      <SymbolStatus {...(isLive ? data : selectedData)} />
      <ChartInfoCards {...(isLive ? data : selectedData)} />
      <Chart
        dataStream={dataStream}
        data={data}
        setLegendInfo={setSelectedData}
        isLive={isLive}
      />
    </div>
  )
}

export default ChartWithFeatures

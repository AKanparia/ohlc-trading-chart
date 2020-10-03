import React from 'react'
import Chart from './Chart'

function ChartWithFeatures({ dataStream, data }) {
  return (
    <div className='chart-container'>
      <div className='chart-symbol'>
        Symbol <span>UP%</span>
      </div>
      <div className='chart-info'>
        <div className='info-card'>OHLC Data here</div>
        <div className='info-card'>OHLC Data here</div>
        <div className='info-card'>OHLC Data here</div>
        <div className='info-card'>OHLC Data here</div>
      </div>
      <Chart dataStream={dataStream} data={data} />
    </div>
  )
}

export default ChartWithFeatures

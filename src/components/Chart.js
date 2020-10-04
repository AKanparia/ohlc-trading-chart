import React from 'react'
import { createChart } from 'lightweight-charts'
import { useMeasureDimension } from '../hooks'

function ChartContainer({ dataStream = [], data, setLegendInfo, isLive }) {
  const chartDivRef = React.useRef()
  const { width = 100, height = 100 } = useMeasureDimension(chartDivRef)
  const [chart, setChart] = React.useState(null)
  const [barSeries, setBarSeries] = React.useState(null)
  const [volumeSeries, setVolumeSeries] = React.useState(null)
  const volume = React.useMemo(
    () =>
      dataStream.map((item) => {
        const { time, volume, open, close } = item
        return {
          value: volume,
          time,
          color:
            open <= close ? 'rgba(0, 150, 136, 0.3)' : 'rgba(255,82,82, 0.3)',
        }
      }),
    [dataStream]
  )

  const ohlc = React.useMemo(
    () =>
      dataStream.map((item) => {
        const { time, open, high, low, close } = item
        return { time, open, high, low, close }
      }),
    [dataStream]
  )

  const liveData = React.useMemo(() => data, [data])

  const handleCrosshairMoved = React.useCallback(
    (param) => {
      if (!param.point) return
      const iterator = param.seriesPrices.values()
      const ohlc = iterator.next().value
      const volume = iterator.next().value
      const time = param.time

      setLegendInfo({ ...ohlc, volume, time })
    },
    [setLegendInfo]
  )

  React.useEffect(() => {
    const chart = createChart(chartDivRef.current, {
      width: 100,
      height: 100,
      localization: {
        locale: 'en-IN',
      },
      layout: {
        backgroundColor: '#222327',
        textColor: '#e0e0e0',
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        borderVisible: true,
      },
      crosshair: {
        vertLine: {
          labelVisible: false,
        },
      },
      grid: {
        vertLines: {
          color: '#445a70',
          style: 1,
          visible: true,
        },
        horzLines: {
          color: '#445a70',
          style: 1,
          visible: true,
        },
      },
    })
    const barSeries = chart.addBarSeries({
      thinBars: true,
      upColor: '#17d492',
      downColor: '#f34045',
    })

    const volumeSeries = chart.addHistogramSeries({
      color: '#092845',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    })
    setBarSeries(barSeries)
    setVolumeSeries(volumeSeries)
    setChart(chart)
    if (!isLive) chart.subscribeCrosshairMove(handleCrosshairMoved)

    return () => {
      chart.unsubscribeCrosshairMove(handleCrosshairMoved)
    }
  }, [handleCrosshairMoved, isLive])

  React.useEffect(() => {
    chart && chart.resize(width, height)
  }, [width, height, chart])

  React.useEffect(() => {
    if (barSeries) {
      barSeries.setData(ohlc)
    }

    if (volumeSeries) {
      volumeSeries.setData(volume)
    }
  }, [barSeries, volumeSeries, ohlc, volume])

  React.useEffect(() => {
    if (!liveData) return

    if (barSeries) {
      barSeries.update({ ...liveData })
    }

    if (volumeSeries) {
      const { time, volume, open, close } = liveData
      volumeSeries.update({
        value: volume,
        time,
        color: open <= close ? '#17d492a8' : '#f34045a8',
      })
    }
  }, [barSeries, volumeSeries, liveData])

  return <div ref={chartDivRef} className='chart'></div>
}

export default ChartContainer

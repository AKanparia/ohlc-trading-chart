import React from 'react'
import './styles/styles.scss'
import { Header, Footer } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import axios from 'axios'
import socket from './utils/socket'
import { HistoricalView, LiveView } from './features'
import { useLocalStorageState } from './hooks'
import { mergeSort, sortedUniqueBy } from './utils/utilities'

function App() {
  const [data, setData] = useLocalStorageState('history', [])
  const [isOnline, setIsOnline] = React.useState(false)
  const [liveData, setLiveDate] = React.useState(null)
  const [liveDataError, setLiveDateError] = React.useState(null)

  const setHistoricalData = React.useCallback((value) => setData(value), [
    setData,
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    socket.on('connect', () => {
      setIsOnline(true)
    })
    socket.on('data', (data, callback) => {
      if (data !== 'pong') {
        const [time, open, high, low, close, volume] = data.split(',')
        setLiveDate({
          time: Number(time.slice(0, 10)),
          open: Number(open),
          high: Number(high),
          low: Number(low),
          close: Number(close),
          volume: Number(volume),
        })
      }
      callback(1) //Acknowledgement
    })
    socket.on('error', (err) => {
      setLiveDateError(true)
    })
    socket.on('disconnect', () => {
      setIsOnline(false)
    })
  }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios('/api/historical')
        const unsortedData = result.data.map((item) => {
          const [time, open, high, low, close, volume] = item.split(',')
          return {
            time: Number(time.slice(0, 10)),
            open: Number(open),
            high: Number(high),
            low: Number(low),
            close: Number(close),
            volume: Number(volume),
          }
        })
        const sortedData = sortedUniqueBy(
          mergeSort(unsortedData),
          (i) => i.time
        )
        setHistoricalData(sortedData)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [setHistoricalData])

  return (
    <Router>
      <div className='app'>
        <Header isOnline={isOnline} />
        <Switch>
          <Route path='/home'>
            <HistoricalView
              data={data}
              isLoading={isLoading}
              isError={isError}
            />
          </Route>
          <Route path='/live'>
            <LiveView data={liveData} liveDataError={liveDataError} />
          </Route>
          <Route path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

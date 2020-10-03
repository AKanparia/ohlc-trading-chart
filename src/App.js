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
import { HistoricalView, LiveView } from './features'
import { useLocalStorageState } from './hooks'
import { mergeSort, sortedUniqueBy } from './utils/utilities'

function App() {
  const [data, setData] = useLocalStorageState('history', [])

  const setHistoricalData = React.useCallback((value) => setData(value), [
    setData,
  ])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

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
        console.log(sortedData)
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
        <Header />
        <Switch>
          <Route path='/home'>
            <HistoricalView
              data={data}
              isLoading={isLoading}
              isError={isError}
            />
          </Route>
          <Route path='/live'>
            <LiveView />
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

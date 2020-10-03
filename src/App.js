import React from 'react'
import './styles/styles.scss'
import { Header, Footer } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { HistoricalView, LiveView } from './features'

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/home'>
            <HistoricalView />
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

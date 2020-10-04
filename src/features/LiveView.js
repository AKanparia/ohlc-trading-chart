import React from 'react'
import { Dashboard, ChartWithFeatures } from '../components'
import socket from '../utils/socket'

function LiveView({ data }) {
  React.useEffect(() => {
    socket.emit('ping', {})
    socket.emit('sub', { state: true })
    return () => {
      socket.emit('ping', {})
      socket.emit('unsub', { state: false })
    }
  }, [])
  return (
    <Dashboard title='Live Tracking'>
      <ChartWithFeatures data={data} isLive={true} />
    </Dashboard>
  )
}

export default LiveView

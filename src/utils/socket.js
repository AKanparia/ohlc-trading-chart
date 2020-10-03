import io from 'socket.io-client'
const socket = io(`${process.env.REACT_APP_BASE_URL}/watch`)

export default socket

import { io as WebSocket } from 'socket.io-client';

const PORT = 8080
const ENDPOINT = `localhost:${PORT}/plugin`

export const socket = WebSocket(`ws://${ENDPOINT}`, {
  reconnectionDelayMax: 10000
})

socket.on('open', () => {
  console.log('[INFO] socket connected');
})

socket.on('close', () => {
  console.log("[INFO] socket closed");
})


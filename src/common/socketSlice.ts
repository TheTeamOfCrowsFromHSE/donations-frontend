import { io as WebSocket } from 'socket.io-client';

const PORT = 8080
const ENDPOINT = `localhost:${PORT}/plugin`

export const socket = WebSocket(`ws://${ENDPOINT}`, {
  reconnectionDelayMax: 10000,
  transports: ["websocket"]
})

socket.io.on('open', () => {
  console.log('[INFO] socket connected');
})

socket.io.on('close', () => {
  console.log("[INFO] socket closed");
})


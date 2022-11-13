// https://www.npmjs.org/package/ws

import WebSocket from "ws";

const port = 8080;
const ws = new WebSocket(`ws://192.168.43.72:${port}/events`);

ws.on("open", () => {
    console.log("[Client] Connected!");
    ws.send("SLAVA!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
});
ws.on("message", (data) => {
    console.log(`Received a message: ${data}`);
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
    ws.send("Hi, this is a client!");
});


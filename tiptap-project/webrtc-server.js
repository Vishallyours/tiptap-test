import { WebSocketServer } from 'ws';
import express from 'express';

const app = express();
const port = process.env.PORT || 4444;  // Use the dynamic Render port

// Create a WebSocket server that listens on the correct port
const wss = new WebSocketServer({ server: app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) });

wss.on('connection', (ws) => {
  console.log('New client connected.');

  ws.on('message', (message) => {
    console.log('Received message:', message);
  });
});

// Log to verify
console.log('WebRTC signaling server is running at ws://localhost:' + port);

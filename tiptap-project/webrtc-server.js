// webrtc-server.js

import { WebSocketServer } from 'ws';
import http from 'http';

// Use dynamic port for production (Render) or fallback to 4444 for local dev
const port = process.env.PORT || 4444;

// Create a raw HTTP server (Render requires this)
const server = http.createServer();

// Create WebSocket server on top of the HTTP server
const wss = new WebSocketServer({ server });

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('New client connected.');

  ws.on('message', (message) => {
    // Optional: Log or handle incoming messages
    // console.log('Received message:', message.toString());
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`✅ WebRTC signaling server is running on ws://localhost:${port}`);
});


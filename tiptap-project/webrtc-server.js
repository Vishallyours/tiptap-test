import { WebSocketServer } from 'ws';
import express from 'express';
import http from 'http';

const app = express();
const port = process.env.PORT || 4444;

// Create HTTP server from Express app
const server = http.createServer(app);

// Attach WebSocket server to the HTTP server
const wss = new WebSocketServer({ server });

// Start the HTTP server
server.listen(port, () => {
  console.log(`HTTP server is running on port ${port}`);
  console.log(`WebRTC signaling server is available at ws://localhost:${port}`);
});

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('New client connected.');

  ws.on('message', (message) => {
    // Broadcast message to all other clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('❌ Client disconnected.');
  });
});

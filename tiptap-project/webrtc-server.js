import { WebSocketServer } from 'ws'; // Import WebSocketServer directly

// Create a WebSocket server that listens on port 4444
const wss = new WebSocketServer({ port: 4444 });

wss.on('connection', (ws) => {
  console.log('New client connected.');

  // When the server receives a message from the client, it logs it to the console
  ws.on('message', (message) => {
    // console.log('Received message:', message);
  });

});

// Log the message to ensure the server is running
console.log('WebRTC signaling server is running at ws://localhost:4444');
console.log("Server is running...");

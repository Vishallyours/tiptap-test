import * as http from 'http';
import { setupWSConnection } from 'y-websocket/bin/utils.js';
import WebSocket from 'ws';

const port = process.env.PORT || 1234;
const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, () => {
  console.log(`WebSocket server running on port ${port}`);
});

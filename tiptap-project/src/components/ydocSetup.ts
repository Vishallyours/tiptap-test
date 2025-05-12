import * as Y from 'yjs';
// import { WebsocketProvider } from 'y-websocket'
import { WebrtcProvider } from 'y-webrtc';

export const ydoc = new Y.Doc();
export const provider = new WebrtcProvider('tiptap-project', ydoc,{
     signaling: [
    'wss://websocket-backend-for-collaborative-text.onrender.com' 
  ]});

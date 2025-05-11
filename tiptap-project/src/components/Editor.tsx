import { useEditor , EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import * as Y from "yjs";

import Collaboration from "@tiptap/extension-collaboration"; 
import { useEffect } from 'react';
import { WebrtcProvider } from "y-webrtc";


// Create the shared Yjs document
const ydoc = new Y.Doc();
// const configMap = ydoc.getMap("config");



const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydoc,      
        
      }),
    ],
    
  })
  
  useEffect(() => {
    if (!editor) return;
    const provider = new WebrtcProvider("tiptap-project", ydoc);
    
 return () => {
   provider.destroy();
  };
}, [editor]);
   

  

  return (
    <>
      <EditorContent className="border p-4 rounded-lg bg-gray-900 grow-[6]"
      editor={editor}
      
 
       />
    </>
  )
}

export default Tiptap
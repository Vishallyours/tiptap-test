// import { useEditor , EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import * as Y from "yjs";

// import { Collaboration } from "@tiptap/extension-collaboration"; 

// import { WebrtcProvider } from "y-webrtc";
// import { CollaborationCursor } from "@tiptap/extension-collaboration-cursor"
// import { Placeholder }from '@tiptap/extension-placeholder'


// // Create the shared Yjs document
// const ydoc = new Y.Doc();
// const provider = new WebrtcProvider("tiptap-room", ydoc);
// // const configMap = ydoc.getMap("config");



// const Tiptap = () => {
  
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Collaboration.configure({
//         document: ydoc,      
//       }),

//       CollaborationCursor.configure({
//         provider,
//         user: {
//           name:"vish",
//           color: "blue",
//         },
//       }),
//         Placeholder.configure({
//           placeholder: "Type a message"
        
//       })  
//     ], 
//   })

//   return (
//     <>
//       <EditorContent className="border p-4 rounded-lg bg-gray-900 grow-[6]"
//       editor={editor}
      
 
//        />
//     </>
//   )
// }

// export default Tiptap

import { useState, useMemo } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { Collaboration } from '@tiptap/extension-collaboration';
import { CollaborationCursor } from '@tiptap/extension-collaboration-cursor';
import { Placeholder } from '@tiptap/extension-placeholder';
import UsernamePrompt from './UsernamePrompt';

const Tiptap = () => {
  const [username, setUsername] = useState('');
  const [userColor, setUserColor] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);

  const ydoc = useMemo(() => new Y.Doc(), []);
  const provider = useMemo(() => new WebrtcProvider('tiptap-project', ydoc), []);

  const editor = useEditor(
{
    extensions: [
      StarterKit,
      Collaboration.configure({ document: ydoc }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: username || 'Anonymous',
          color: userColor || '#ccc',
        },
      }),
      Placeholder.configure({
        placeholder: 'Type a message',
      }),
    ],
    content: '',
  });

  const handleUsernameSet = (name:string, color:string) => {
    setUsername(name);
    setUserColor(color);
    setIsUsernameSet(true);
  }

  return (
    <>
      {!isUsernameSet ? (
        <UsernamePrompt onUsernameSet={handleUsernameSet} />
      ) : (
         <EditorContent editor={editor} className="border p-4 rounded-lg bg-gray-900 grow-[6]" />
      )   }
    </>
  );
};

export default Tiptap;

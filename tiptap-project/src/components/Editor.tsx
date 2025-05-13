import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import Placeholder from '@tiptap/extension-placeholder';

import { ydoc, provider } from './ydocSetup'; 

interface TiptapEditorProps {
  username: string;
  userColor: string;
}

const Editor: React.FC<TiptapEditorProps> = ({ username, userColor }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: username,
          color: userColor,
        },
      }),
      Placeholder.configure({
        placeholder: 'Type something...',
      }),
    ],
  });


ydoc.on('update', () => {
  console.log('Yjs document updated!');
});

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Collaborative Editor</h2>
      <div className="border border-gray-700 p-4 rounded-lg shadow-md bg-gray-800">
        {editor ? (
          <EditorContent editor={editor} />
        ) : (
          <p className="text-gray-400">Loading editor...</p>
        )}
      </div>
    </div>
  );
};

export default Editor;

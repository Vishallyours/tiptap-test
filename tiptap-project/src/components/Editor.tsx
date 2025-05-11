import { useEditor , EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


const content = '<p>This is Editor section. You can edit here...</p>'

const Tiptap = () => {
  const editor = useEditor({
      content,
    extensions: [StarterKit],
  })

  return (
    <>
      <EditorContent className="border p-4 rounded-lg bg-gray-900 grow-[6]"
      editor={editor}
       />
    </>
  )
}

export default Tiptap
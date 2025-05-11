import Editor from "./components/Editor"

function App() {
 
  return (
    <>
    <div className="flex m-24 gap-10 justify-center flex-wrap items-center content-center">
    
      <div className="border p-4 rounded-lg bg-gray-900 order-none grow self-center">TipTap Editor</div>
      <Editor />
    
    </div>
    </>
  )
}

export default App

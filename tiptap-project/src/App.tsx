// import Editor from "./components/Editor"

// function App() {
 
//   return (
//     <>
//     <div className="flex
//                     m-24
//                     gap-10
//                     justify-center 
//                     flex-wrap
//                     items-center
//                     content-center">
    
//       <div className="flex 
//                       justify-center 
//                       p-4 
//                       gap-4
//                       border 
//                       rounded-lg
//                     bg-gray-900
//                       order-none 
//                       grow
//                       self-center">
//         TipTap Editor
//       </div>

//       <Editor />
    
//     </div>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import UsernamePrompt from './components/UsernamePrompt';
import Editor from './components/Editor';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [userColor, setUserColor] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);

  const handleUsernameSet = (name: string, color: string) => {
    setUsername(name);
    setUserColor(color);
    setIsUsernameSet(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      {!isUsernameSet ? (
        <UsernamePrompt onUsernameSet={handleUsernameSet} />
      ) : (
        <Editor username={username} userColor={userColor} />
      )}
    </div>
  );
};

export default App;

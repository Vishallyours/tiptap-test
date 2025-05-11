import React, { useState } from 'react';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

interface UsernamePromptProps {
  onUsernameSet: (username: string, color: string) => void;
}

const UsernamePrompt: React.FC<UsernamePromptProps> = ({ onUsernameSet }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [userColor] = useState(generateRandomColor());
  
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() === '') {
      setError('Please enter a valid username.');
      return;
    }
    onUsernameSet(username, userColor); // Pass the username to the parent component
  };

  return (
    <div className="flex justify-center items-center w-full h-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-auto  text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Enter your username</h2>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="border p-2 rounded-lg w-full mb-4 bg-gray-900"
          placeholder="Your name"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Set Username
        </button>
      </form>
    </div>
  );
};

export default UsernamePrompt;


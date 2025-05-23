import React, { useState } from 'react';

const AIChatBox = () => {
const [messages, setMessages] = useState([
{ text: 'Hello! How can I assist you today?', sender: 'ai', time: '10:00 AM' },
]);
const [input, setInput] = useState('');

const handleSend = () => {
if (input.trim() === '') return;


const userMessage = {
  text: input,
  sender: 'user',
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

const aiMessage = {
  text: "I'm an AI bot responding to your message.",
  sender: 'ai',
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

setMessages([...messages, userMessage, aiMessage]);
setInput('');
};

return (
<div className="fixed bottom-4 right-4 w-[300px] sm:w-[350px] h-[450px] bg-white border shadow-lg rounded-lg flex flex-col">
<div className="bg-blue-600 text-white text-center py-2 rounded-t-lg font-semibold">
AI Assistant
</div>


  <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
    {messages.map((msg, idx) => (
      <div
        key={idx}
        className={`max-w-[70%] p-2 rounded relative text-sm ${
          msg.sender === 'user'
            ? 'bg-blue-100 self-start'
            : 'bg-gray-200 self-end ml-auto'
        }`}
      >
        <div>{msg.text}</div>
        <div className="text-[10px] text-right text-gray-500 mt-1">{msg.time}</div>
      </div>
    ))}
  </div>

  <div className="p-2 border-t flex items-center">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="flex-1 border border-gray-300 rounded-l px-2 py-1 text-sm focus:outline-none"
      placeholder="Type a message..."
    />
    <button
      onClick={handleSend}
      className="bg-blue-600 text-white px-3 py-1 rounded-r hover:bg-blue-700 text-sm"
    >
      Send
    </button>
  </div>
</div>
);
};

export default AIChatBox;
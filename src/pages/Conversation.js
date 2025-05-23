import React, { useState } from 'react';

const dummyConversations = [
{
id: 1,
name: 'John Doe',
avatar: 'https://i.pravatar.cc/40?img=1',
status: 'online',
messages: [
{ sender: 'user', text: 'Hello!' },
{ sender: 'admin', text: 'Hi! How can I help you?' },
],
},
{
id: 2,
name: 'Jane Smith',
avatar: 'https://i.pravatar.cc/40?img=2',
status: 'offline',
messages: [
{ sender: 'user', text: 'I have an issue with my order.' },
{ sender: 'admin', text: 'Sure, can you provide your order ID?' },
],
},
];

const Conversations = () => {
const [selected, setSelected] = useState(dummyConversations[0]);
const [input, setInput] = useState('');

const handleSend = () => {
if (!input.trim()) return;
const updated = {
...selected,
messages: [...selected.messages, { sender: 'admin', text: input }],
};
setSelected(updated);
setInput('');
};

return (
<div className="flex h-[90vh]">
{/* Sidebar */}
<div className="w-1/3 bg-gray-100 p-4 overflow-y-auto border-r border-gray-300">
<h2 className="text-lg font-bold mb-4">Conversations</h2>
{dummyConversations.map((conv) => (
<div
key={conv.id}
className={`p-3 rounded-lg mb-2 cursor-pointer ${ selected.id === conv.id ? 'bg-blue-100' : 'hover:bg-gray-200' }}
onClick={() => setSelected(conv)`}
>
{conv.name}
</div>
))}
</div>


  {/* Chat Window */}
  <div className="flex-1 flex flex-col">
    <div className="p-4 border-b border-gray-300 font-semibold">
      Chat with {selected.name}
    </div>
    <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white">
      {selected.messages.map((msg, idx) => (
        <div
          key={idx}
          className={`max-w-[70%] p-2 rounded ${
            msg.sender === 'user'
              ? 'bg-blue-100 self-start'
              : 'bg-gray-200 self-end ml-auto'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
    <div className="p-4 border-t border-gray-300 flex">
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 p-2 rounded-l focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 rounded-r"
      >
        Send
      </button>
    </div>
  </div>
</div>
);
};

export default Conversations;
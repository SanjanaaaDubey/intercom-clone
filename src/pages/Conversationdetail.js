import { useParams } from "react-router-dom";
import React, { useState } from "react";

const Conversationdetail = () => {
const { id } = useParams();
const [messages, setMessages] = useState([
{ sender: "John", text: "Hey there! Need some help." },
{ sender: "Admin", text: "Sure! How can I help you today?" },
]);
const [input, setInput] = useState("");

const sendMessage = () => {
if (!input.trim()) return;
setMessages([...messages, { sender: "Admin", text: input }]);
setInput("");
};

return (
<div className="flex flex-col h-screen">
<div className="p-4 border-b font-bold text-lg">Chat #{id}</div>


  {/* Chat messages */}
  <div className="flex-1 p-4 overflow-y-auto space-y-3">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`p-3 rounded-lg max-w-xs ${
          msg.sender === "Admin"
            ? "bg-blue-100 ml-auto text-right"
            : "bg-gray-200"
        }`}
      >
        <div className="text-sm">{msg.text}</div>
      </div>
    ))}
  </div>

  {/* Input */}
  <div className="p-4 border-t flex">
    <input
      className="flex-1 border rounded px-3 py-2"
      placeholder="Type a message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      onClick={sendMessage}
      className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
    >
      Send
    </button>
  </div>
</div>
);
};
export default Conversationdetail;
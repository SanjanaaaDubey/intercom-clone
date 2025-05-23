import React from "react";

const chats = [
{ id: 1, name: "Alice Johnson", message: "Hi, I need help with my order." },
{ id: 2, name: "Bob Smith", message: "Is this available in stock?" },
{ id: 3, name: "Carol Lee", message: "Thanks for the update!" },
];

const ChatList = ({ onSelect }) => {
return (
<div className="p-4 space-y-4 overflow-y-auto">
{chats.map((chat) => (
<div
key={chat.id}
className="cursor-pointer p-3 bg-white rounded-lg shadow hover:bg-gray-100"
onClick={() => onSelect(chat)}
>
<h4 className="font-semibold">{chat.name}</h4>
<p className="text-sm text-gray-600 truncate">{chat.message}</p>
</div>
))}
</div>
);
};

export default ChatList;
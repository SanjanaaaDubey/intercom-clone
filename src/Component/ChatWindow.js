import React from "react";

const ChatWindow = ({ selectedChat }) => {
if (!selectedChat) {
return (
<div className="flex items-center justify-center h-full text-gray-500">
Select a chat to view the conversation
</div>
);
}

return (
<div className="flex flex-col h-full">
<div className="p-4 border-b bg-white">
<h2 className="text-lg font-bold">{selectedChat.name}</h2>
<p className="text-sm text-gray-500">Chat details here</p>
</div>
<div className="flex-1 p-4 overflow-y-auto">
<div className="bg-gray-100 p-3 rounded-lg w-max mb-2">
{selectedChat.message}
</div>
</div>
<div className="p-4 border-t bg-white">
<input type="text" placeholder="Type a message..." className="w-full border rounded-lg px-4 py-2 focus:outline-none" />
</div>
</div>
);
};

export default ChatWindow;
import React from "react";
import { Outlet } from "react-router-dom";
import Conversation from "./Conversation";

const ConversationsLayout = () => {
return (
<div className="flex h-screen">
{/* Left sidebar with list */}
<div className="w-1/3 border-r overflow-y-auto">
<Conversation />
</div>


  {/* Right panel with chat detail */}
  <div className="flex-1">
    <Outlet />
  </div>
</div>
);
};

export default ConversationsLayout;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Header from './Component/Header';
import Dashboard from './pages/Dashboard';
import Conversation from './pages/Conversation';
import Contact from './pages/Contact';
import Reports from './pages/Reports';
import Conversationdetail from './pages/Conversationdetail'; // Make sure file name matches!
import ConversationsLayout from './pages/ConversationsLayout';
//import ChatPage from './pages/ChatPage';
import AIChatBox from './Component/AIChatBox';  // <-- Import AIChatBox

function App() {
  return (
    <Router>
      
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/conversation" element={<Conversation />} />
              <Route path="/conversation/:id" element={<Conversationdetail />} />
              <Route path="/conversation" element={<ConversationsLayout />}/>
              <Route path="/contacts" element={<Contact />} />
              <Route path="/reports" element={<Reports />} />
             {/* <Route path="/" element={<ConversationTab />} />
               <Route path="/conversations" element={<ConversationDetail />} />
               <Route path="/conversation/:id" element={<ChatPage />} /> */}
            </Routes>
          </main>
          <AIChatBox />  {/* <-- Add AIChatBox here */}
        </div>
      </div>
      
    </Router>
  );
}

export default App;

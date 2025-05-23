// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">Intercom Clone</div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/conversation">Conversations</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/reports">Reports</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">User Profile</div>
    </div>
  );
};

export default Sidebar;

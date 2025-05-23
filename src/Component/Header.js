// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;

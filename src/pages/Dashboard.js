import React from "react";

const stats = [
{
label: "Total Conversations",
value: 128,
icon: "💬",
color: "bg-blue-100 text-blue-800",
},
{
label: "Open Tickets",
value: 34,
icon: "📩",
color: "bg-yellow-100 text-yellow-800",
},
{
label: "Resolved",
value: 89,
icon: "✅",
color: "bg-green-100 text-green-800",
},
{
label: "New Contacts",
value: 21,
icon: "🧑‍💼",
color: "bg-purple-100 text-purple-800",
},
];

const Dashboard = () => {
return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-2xl font-bold mb-6">Dashboard</h1>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((item, idx) => (
      <div
        key={idx}
        className={`p-5 rounded-xl shadow ${item.color} flex flex-col gap-2 transition transform hover:scale-105`}
      >
        <div className="text-3xl">{item.icon}</div>
        <div className="text-sm text-gray-700">{item.label}</div>
        <div className="text-2xl font-bold">{item.value}</div>
      </div>
    ))}
  </div>
</div>
);
};

export default Dashboard;
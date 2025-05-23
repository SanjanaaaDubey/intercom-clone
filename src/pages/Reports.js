import React from 'react';
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
BarChart,
Bar,
PieChart,
Pie,
Cell,
Legend,
ResponsiveContainer,
} from 'recharts';

const data = [
{ name: 'Mon', chats: 40, satisfaction: 70 },
{ name: 'Tue', chats: 30, satisfaction: 80 },
{ name: 'Wed', chats: 50, satisfaction: 85 },
{ name: 'Thu', chats: 75, satisfaction: 90 },
{ name: 'Fri', chats: 60, satisfaction: 88 },
];

const pieData = [
{ name: 'Positive', value: 60 },
{ name: 'Neutral', value: 25 },
{ name: 'Negative', value: 15 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const Reports = () => {
return (
<div className="p-6">
<h2 className="text-2xl font-bold mb-6">Reports & Analytics</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Line Chart */}
<div className="bg-white p-4 rounded shadow">
<h3 className="text-lg font-semibold mb-2">Daily Chat Volume</h3>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="chats" stroke="#4F46E5" strokeWidth={3} />
</LineChart>
</ResponsiveContainer>
</div>


    {/* Bar Chart */}
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="satisfaction" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Pie Chart */}
    <div className="bg-white p-4 rounded shadow md:col-span-2">
      <h3 className="text-lg font-semibold mb-2">Feedback Sentiment</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>
);
};

export default Reports;
import React from "react";

const dummyContacts = [
{
id: 1,
name: "Alice Johnson",
email: "alice@example.com",
status: "Active",
avatar: "🧑‍💼",
},
{
id: 2,
name: "Bob Smith",
email: "bob@example.com",
status: "Inactive",
avatar: "🧔",
},
{
id: 3,
name: "Clara Brown",
email: "clara@example.com",
status: "Active",
avatar: "👩‍💻",
},
{
id: 4,
name: "David Wilson",
email: "david@example.com",
status: "Pending",
avatar: "🧑‍🔧",
},
];

const Contacts = () => {
return (
<div className="p-6 bg-gray-100 min-h-screen">
<h1 className="text-2xl font-bold mb-6">Contacts</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{dummyContacts.map((contact) => (
<div key={contact.id} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer" >
<div className="text-5xl mb-2">{contact.avatar}</div>
<h2 className="text-lg font-semibold">{contact.name}</h2>
<p className="text-sm text-gray-500">{contact.email}</p>
<span
className={`mt-2 inline-block px-3 py-1 text-xs rounded-full ${ contact.status === "Active" ? "bg-green-100 text-green-700" : contact.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700" }`}
>
{contact.status}
</span>
</div>
))}
</div>
</div>
);
};

export default Contacts;
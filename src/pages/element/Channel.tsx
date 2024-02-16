import React, { useState } from "react";
import DataTable, { Column } from "react-data-table-component";
import { Link } from "react-router-dom";

interface Channel {
  _id: string;
  name: string;
  email: string;
  commission: number;
}

const ChannelList = () => {
  const [channels, setChannels] = useState<Channel[]>([
    {
      name: "John Doe",
      email: "john@example.com",
      commission: 10,
      _id: "1",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      commission: 15,
      _id: "2",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      commission: 12,
      _id: "3",
    },
    {
      name: "Bob Williams",
      email: "bob@example.com",
      commission: 18,
      _id: "4",
    },
    {
      name: "Eva Brown",
      email: "eva@example.com",
      commission: 9,
      _id: "5",
    },
    {
      name: "Michael Lee",
      email: "michael@example.com",
      commission: 11,
      _id: "6",
    },
    {
      name: "Sophia Garcia",
      email: "sophia@example.com",
      commission: 14,
      _id: "7",
    },
    {
      name: "David Rodriguez",
      email: "david@example.com",
      commission: 16,
      _id: "8",
    },
    {
      name: "Emma Martinez",
      email: "emma@example.com",
      commission: 13,
      _id: "9",
    },
    {
      name: "William Hernandez",
      email: "william@example.com",
      commission: 20,
      _id: "10",
    },
  ]);

  const columns: Column<Channel>[] = [
    { name: "Index", selector: (row: any, index: number) => index + 1 },
    { name: "Name", selector: (row: { name: any }) => row.name },
    { name: "E-mail", selector: (row: { email: any }) => row.email },
    {
      name: "Commission %",
      selector: (row: { commission: any }) => row.commission,
    },
    {
      name: "Action",
      cell: (row: Channel) => (
        <div>
          <button
            onClick={() => handleEdit(row)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const data = channels.map((channel, index) => ({
    index: index + 1,
    name: channel.name,
    email: channel.email,
    commission: channel.commission,
  }));

  const handleEdit = (row: Channel) => {
    // Handle edit action
    console.log("Edit row:", row);
  };

  const handleDelete = (row: Channel) => {
    // Handle delete action
    console.log("Delete row:", row);
  };

  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Channels List
          </h1>

          <Link
            to="/channels/add-channel"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Add Channel
          </Link>
        </div>
        <div className="flex flex-col mt-10">
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            responsive
          />
        </div>
      </div>
    </>
  );
};

export default ChannelList;

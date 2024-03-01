import React, { useState, useEffect } from "react";
import DataTable, { Column } from "react-data-table-component";
import { Link } from "react-router-dom";
import axios from "axios";
import backend_Url from "../../api/api";
import EditForm from "./EditForm"; 


interface Channel {
  _id: string;
  channelName: string;
  email: string;
  commission: number;
}

const ChannelList = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [reFetch, setReFetch] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedData, setEditedData] = useState<Channel | null>(null);

  const columns: Column<Channel>[] = [
    { name: "Index", selector: (row: any, index: number) => index + 1 },
    { name: "Name", selector: (row: { channelName: any; name: any }) => row.channelName },
    { name: "E-mail", selector: (row: { email: any }) => row.email },
    { name: "Commission %", selector: (row: { commission: any }) => row.commission },
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


  const handleEdit = (row: Channel) => {
    setEditMode(true);
    setEditedData(row);
  };
  
  const handleSaveEdit = async (editedData: Channel) => {
    try {
      const response = await axios.put(`${backend_Url}/api/admin/edit-channel/${editedData._id}`, {
      
        // Include other fields to be updated
        ...editedData,
      });

      console.log("Edit response:", response.data);

      // Update the state with the edited data
      setChannels((prevChannels) =>
        prevChannels.map((ch) => (ch._id === editedData._id ? response.data : ch))
      );

      setEditMode(false);
      setEditedData(null);
    } catch (error) {
      console.error("Error editing channel:", error);
    }
  };


  const handleDelete = async (row: Channel) => {
    try {
      const response = await axios.post(`${backend_Url}/api/admin/delete-channel`,{id:row._id});
      console.log("Delete row:", row);
      console.log("Delete response:", response.data);
      setReFetch((prev) => !prev);
    } catch (error) {
      console.error("Error deleting channel:", error);
    }
  };

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axios.get(`${backend_Url}/api/admin/channels`); 
        setChannels(response.data);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, [reFetch]);

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
        {editMode ? (
          // Render edit form or modal
          <EditForm
            editedData={editedData}
            onCancel={() => setEditMode(false)}
            onSave={handleSaveEdit}
          />
        ) : (
          // Render DataTable
          <DataTable
            columns={columns}
            data={channels}
            pagination
            highlightOnHover
            responsive
          />
        )}
        </div>
      </div>
    </>
  );
};


export default ChannelList;

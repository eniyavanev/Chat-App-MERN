import React from 'react';
import { MdDoneOutline } from "react-icons/md";
import type { RootState } from "./Redux/Store/store";
import { useSelector } from "react-redux";

const CreateGroup: React.FC = () => {
  const dark = useSelector((state: RootState) => state.theme.theme);

  const containerTheme = dark ? "bg-gray-900 text-white" : "bg-white text-gray-800";
  const inputTheme = dark
    ? "bg-gray-800 text-white border-gray-600 placeholder:text-gray-400"
    : "bg-white text-gray-900 border-gray-300 placeholder:text-gray-500";

  return (
    <div className={`p-4 rounded-xl shadow-sm w-full ${containerTheme}`}>
      <h2 className="text-xl font-semibold mb-3">Create New Group</h2>

      <input
        type="text"
        placeholder="Enter group name"
        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputTheme}`}
      />

      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition flex items-center gap-2"
        >
          <MdDoneOutline className="text-xl" />
          <span>Create</span>
        </button>
      </div>
    </div>
  );
};

export default CreateGroup;

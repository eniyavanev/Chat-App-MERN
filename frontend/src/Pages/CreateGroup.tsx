import React from "react";
import { MdDoneOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import type { RootState } from "./Redux/Store/store";
import { motion } from "framer-motion";

const CreateGroup: React.FC = () => {
  const isDark = useSelector((state: RootState) => state.theme.theme);

  const containerTheme = isDark
    ? "bg-gray-900 text-white border border-gray-700"
    : "bg-white text-gray-800 border border-white/30";

  const inputTheme = isDark
    ? "bg-gray-800 text-white border-gray-600 placeholder:text-gray-400"
    : "bg-white text-gray-900 border-gray-300 placeholder:text-gray-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`w-full  mx-auto p-6 rounded-2xl shadow-lg m-3 ${containerTheme}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">🚀 Create New Group</h2>

      <input
        type="text"
        placeholder="Enter your group name"
        className={`w-full p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputTheme}`}
      />

      <div className="flex justify-end mt-6">
        <button
          className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-md hover:bg-blue-600 transition active:scale-95"
        >
          <MdDoneOutline className="text-xl" />
          <span className="font-medium">Create</span>
        </button>
      </div>
    </motion.div>
  );
};

export default CreateGroup;

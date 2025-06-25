import React, { useState } from "react";
import SearchInput from "../Components/UI/FormField";
import type { RootState } from "./Redux/Store/store";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const OnlineUsers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      status: "Active now",
    },
    {
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      status: "Active now",
    },
    {
      name: "Mark Brown",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      status: "Active now",
    },
    {
      name: "Emily White",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      status: "Active now",
    },
    {
      name: "Daniel Lee",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      status: "Active now",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dark = useSelector((state: RootState) => state.theme.theme);
  const containerTheme = dark
    ? "bg-gray-900 text-white border-gray-700"
    : "bg-white/60 text-gray-900 border-white/30";
  const headerBorder = dark ? "border-gray-700" : "border-gray-200";
  const nameText = dark ? "text-white" : "text-gray-800";
  const statusText = "text-green-500";
  const hoverBg = dark
    ? "hover:bg-gray-800"
    : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50";
  const theme = dark ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full backdrop-blur-md rounded-2xl p-5 m-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)] space-y-5 border ${containerTheme}`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between border-b pb-2 ${headerBorder}`}
      >
        <h2 className="text-xl font-semibold">👥 Users Online</h2>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-0.5 rounded-full">
          {filteredUsers.length} Online
        </span>
      </div>

      {/* Search */}
      <SearchInput
        placeholder="Search users..."
        value={searchTerm}
        dark={theme === "bg-gray-900 text-white"}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />

      {/* User List */}
      <div className="space-y-3 overflow-y-auto custom-scroll pr-1 max-h-[350px]">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-4 p-2 rounded-xl ${hoverBg} transition duration-300 cursor-pointer`}
            >
              <div className="w-12 h-12 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500">
                <img
                  src={user.image}
                  alt={user.name}
                  className="rounded-full w-full h-full object-cover border-2 border-white"
                />
              </div>
              <div>
                <p className={`text-sm font-semibold ${nameText}`}>
                  {user.name}
                </p>
                <p className={`text-xs ${statusText}`}>{user.status}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-center text-gray-400"
          >
            No users found
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default OnlineUsers;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./Redux/Store/store";
import SearchInput from "../Components/UI/FormField";
import { motion } from "framer-motion";

const AvailableGroups: React.FC = () => {
  const [search, setSearch] = useState("");
  const isDark = useSelector((state: RootState) => state.theme.theme);

  const themeClass = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const cardClass = isDark ? "bg-gray-800" : "bg-white";

  const groups = [
    {
      name: "React Developers",
      image: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
      members: "120 members",
    },
    {
      name: "Node.js Enthusiasts",
      image: "https://avatars.githubusercontent.com/u/9950313?s=280&v=4",
      members: "89 members",
    },
    {
      name: "Design & UI/UX",
      image: "https://avatars.githubusercontent.com/u/6154722?s=280&v=4",
      members: "72 members",
    },
    {
      name: "DevOps Engineers",
      image: "https://avatars.githubusercontent.com/u/44036562?s=280&v=4",
      members: "64 members",
    },
    {
      name: "AI & ML Learners",
      image: "https://avatars.githubusercontent.com/u/87214788?s=280&v=4",
      members: "100 members",
    },
  ];

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full ${themeClass} backdrop-blur-md m-3 rounded-2xl p-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] space-y-5 border border-white/30`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2 border-gray-300 dark:border-gray-600">
        <h2 className="text-xl font-semibold">👥 Available Groups</h2>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-0.5 rounded-full">
          {filteredGroups.length} Online
        </span>
      </div>

      {/* Search */}
      <SearchInput
        placeholder="Search groups..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        dark={isDark}
      />

      {/* Group List */}
      <div className="space-y-3 overflow-y-auto max-h-[350px] custom-scroll pr-1">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className={`${cardClass} flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition duration-300 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-xl p-1 bg-gradient-to-tr from-blue-500 to-purple-500">
                <img
                  src={group.image}
                  alt={group.name}
                  className="rounded-xl w-full h-full object-cover border-2 border-white"
                />
              </div>
              <div>
                <p className="text-base font-semibold">{group.name}</p>
                <p className="text-xs text-gray-400">{group.members}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-gray-500 pt-4"
          >
            No groups found
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default AvailableGroups;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuCircleUserRound } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { MdGroupAdd, MdOutlineAddCircle, MdNightlight } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

import ConversationItems from "../../Pages/ConversationItems";
import { persons } from "../Data";
import SearchInput from "../UI/FormField";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../Pages/Redux/Store/store";
import { toggleTheme } from "../../Pages/Redux/Slices/themeSlice";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const isDark = useSelector((state: RootState) => state.theme.theme);
  const [searchTerm, setSearchTerm] = useState("");

  const themeClass = isDark
    ? "bg-gray-900 text-white"
    : "bg-gray-100 text-gray-800";
  const cardClass = isDark ? "bg-gray-800" : "bg-white";

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`w-full sm:flex-[0.35] flex flex-col ${themeClass} rounded-2xl h-full`}
    >
      {/* Header */}
      <div
        className={`${cardClass} rounded-2xl flex flex-col sm:flex-row items-center justify-between px-4 py-3 md:m-3 shadow-xl shadow-black/20 gap-4 sm:gap-0`}
      >
        <button
          title="Profile"
          onClick={() => navigate("/main/Welcome")}
          className="text-3xl hover:text-blue-500 transition duration-200"
        >
          <LuCircleUserRound />
        </button>

        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
          <SidebarButton
            icon={<FaUser />}
            title="Users Online"
            path="/main/OnlineUsers"
          />
          <SidebarButton
            icon={<MdGroupAdd />}
            title="Available Groups"
            path="/main/AvailableGroups"
          />
          <SidebarButton
            icon={<MdOutlineAddCircle />}
            title="Create Group"
            path="/main/CreateGroup"
          />
          <button
            title={isDark ? "Light Mode" : "Dark Mode"}
            onClick={() => dispatch(toggleTheme())}
            className="text-2xl hover:text-blue-500 transition"
          >
            {isDark ? <IoMdSunny /> : <MdNightlight />}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mx-3 mb-3 hidden md:block">
        <SearchInput
          placeholder="Search chats..."
          dark={isDark}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Mobile Search */}
      <div className="px-4 py-2 md:hidden">
        <SearchInput
          placeholder="Search..."
          dark={isDark}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Chat List */}
      <div
        className={`${cardClass} mx-3 mb-3 rounded-2xl px-2 py-2 shadow-xl shadow-black/20 flex-1 overflow-y-auto custom-scroll`}
      >
        {filteredPersons.length > 0 ? (
          <ConversationItems persons={filteredPersons} />
        ) : (
          <p className="text-center text-sm text-gray-400">No matches found</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

type SidebarButtonProps = {
  icon: React.ReactNode;
  title: string;
  path: string;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, title, path }) => {
  const navigate = useNavigate();
  return (
    <button
      title={title}
      onClick={() => navigate(path)}
      className="text-2xl hover:text-blue-500 transition"
    >
      {icon}
    </button>
  );
};

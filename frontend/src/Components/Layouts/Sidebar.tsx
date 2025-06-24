import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuCircleUserRound } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { MdGroupAdd, MdOutlineAddCircle, MdNightlight } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import ConversationItems from "../../Pages/ConversationItems";
import { persons } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Pages/Redux/Store/store";
import { toggleTheme } from "../../Pages/Redux/Slices/themeSlice";
import SearchInput from "../UI/FormField";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dark = useSelector((state: RootState) => state.theme.theme);
  const [searchTerm, setSearchTerm] = useState("");

  const theme = dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800";
  const cardBg = dark ? "bg-gray-800" : "bg-white";

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`w-full  sm:flex-[0.35]  flex flex-col ${theme} rounded-2xl h-full`}
    >
      {/* Header */}
      <div
        className={`${cardBg} rounded-2xl flex-col flex-[1] sm:flex-[0.1]  flex sm:flex-row  sm:items-center justify-between px-4 py-3 md:m-3 shadow-xl shadow-black/20`}
      >
        <button
          title="Profile"
          onClick={() => navigate("/main/Welcome")}
          className="text-3xl hover:text-blue-500 transition duration-200"
        >
          <LuCircleUserRound />
        </button>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-4">
          <button
            title="Users Online"
            onClick={() => navigate("/main/OnlineUsers")}
            className="text-xl hover:text-blue-500 transition"
          >
            <FaUser />
          </button>
          <button
            title="Available Groups"
            onClick={() => navigate("/main/AvailableGroups")}
            className="text-2xl hover:text-blue-500 transition"
          >
            <MdGroupAdd />
          </button>
          <button
            title="Create Group"
            onClick={() => navigate("/main/CreateGroup")}
            className="text-2xl hover:text-blue-500 transition"
          >
            <MdOutlineAddCircle />
          </button>
          <button
            title={dark ? "Light Mode" : "Dark Mode"}
            onClick={() => dispatch(toggleTheme())}
            className="text-2xl hover:text-blue-500 transition cursor-pointer"
          >
            {dark ? <IoMdSunny /> : <MdNightlight />}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mx-3 mb-3">
        <SearchInput
          placeholder="Search chats..."
          dark={dark}
          value={searchTerm}
          className="hidden md:flex"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Chat List */}
      <div
        className={`${cardBg} hidden md:block  rounded-2xl px-2 py-2 mx-3 mb-3 shadow-xl shadow-black/20 flex-1 overflow-y-auto`}
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

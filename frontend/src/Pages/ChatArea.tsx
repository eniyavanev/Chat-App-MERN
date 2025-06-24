import React from "react";
import { MdDelete } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";
import type { RootState } from "./Redux/Store/store";
import { useSelector } from "react-redux";

const ChatArea: React.FC = () => {
  const dark = useSelector((state: RootState) => state.theme.theme);

  const baseTheme = dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
  const headerTheme = dark ? "bg-gray-800 text-white" : "bg-white text-gray-800";
  const chatBg = dark ? "bg-gray-800" : "bg-gray-50";
  const inputBg = dark ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400" : "bg-white border-gray-300 text-gray-800";

  return (
    <div className={`flex-[0.7] flex flex-col min-h-0 rounded-2xl md:overflow-hidden ${baseTheme}`}>
      {/* Header */}
      <div className={`flex-shrink-0 px-4 py-3 shadow-sm ${headerTheme} flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium text-sm">John Doe</span>
            <span className="text-green-500 text-xs">Online</span>
          </div>
        </div>
        <button className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-300">
          <MdDelete className="text-xl" />
        </button>
      </div>

      {/* Messages */}
      <div className={`flex-1 min-h-0 overflow-auto p-4 ${chatBg}`}>
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
      </div>

      {/* Input Section */}
      <div className={`flex-shrink-0 px-4 py-3 shadow-sm ${headerTheme}`}>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className={`flex-1 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBg}`}
          />
          <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            <IoSend className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;

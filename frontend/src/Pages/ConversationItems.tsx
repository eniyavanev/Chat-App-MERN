import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Pages/Redux/Store/store";

type Person = {
  name: string;
  image: string;
  message: string;
  time: string;
};

type Props = {
  persons: Person[];
};

const ConversationItems: React.FC<Props> = ({ persons }) => {
  const navigate = useNavigate();
  const isDark = useSelector((state: RootState) => state.theme.theme);

  const cardBg = isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-blue-50";
  const nameText = isDark ? "text-white" : "text-gray-800";
  const messageText = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <div className="space-y-3 p-2 sm:p-4">
      {persons.map((person, index) => (
        <div
          key={index}
          onClick={() => navigate("/main/ChatArea")}
          className={`flex items-center justify-between p-3 rounded-xl shadow-sm transition-all duration-300 cursor-pointer ${cardBg}`}
        >
          {/* Left: Image & Info */}
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={person.image}
              alt={person.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col max-w-[60vw] sm:max-w-[70%] overflow-hidden">
              <span className={`font-medium text-sm sm:text-base truncate ${nameText}`}>
                {person.name}
              </span>
              <span className={`text-xs sm:text-sm truncate ${messageText}`}>
                {person.message}
              </span>
            </div>
          </div>

          {/* Right: Time */}
          <span className="text-[10px] sm:text-sm text-gray-400 whitespace-nowrap pl-2">
            {person.time}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ConversationItems;

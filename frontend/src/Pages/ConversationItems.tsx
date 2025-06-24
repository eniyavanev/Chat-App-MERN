import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Person {
  name: string;
  image: string;
  message: string;
  time: string;
}

interface ConversationItemsProps {
  persons: Person[];
}

const ConversationItems: React.FC<ConversationItemsProps> = ({ persons }) => {
  const navigate = useNavigate(); 

  return (
    <div className="space-y-3 p-2 sm:p-4">
      {persons.map((person, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-white shadow-sm rounded-xl hover:bg-blue-50 transition duration-300 cursor-pointer"
          onClick={() => navigate('/main/ChatArea')} 
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={person.image}
              alt={person.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col max-w-[60vw] sm:max-w-[70%]">
              <span className="font-medium text-gray-800 text-sm sm:text-base truncate">
                {person.name}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm truncate">
                {person.message}
              </span>
            </div>
          </div>

          <div className="text-[10px] sm:text-sm text-gray-400 whitespace-nowrap pl-2">
            {person.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationItems;

import React from 'react';
import LiveChat from "../assets/Icons/live-chat.png";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-[1] sm:flex-[0.7] flex-col items-center justify-center h-full text-center px-4 ">
      <img
        src={LiveChat}
        alt="Live Chat"
        className="w-32 h-32 mb-6 object-contain"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Welcome to Live Chat
      </h1>
      <p className="text-gray-500 text-sm md:text-base">
        Start a conversation by selecting a user.
      </p>
    </div>
  );
};

export default Welcome;

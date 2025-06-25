import React from "react";

const MessageSelf: React.FC = () => {
  const props = {
    text: "I'm good, thanks!",
    time: "2:31 PM",
  };

  return (
    <div className="flex flex-col items-end mb-4">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow break-words max-w-xs whitespace-pre-wrap">
        {props.text}
      </div>

      <div className="text-[10px] text-gray-400 mt-1 pr-1">{props.time}</div>
    </div>
  );
};

export default MessageSelf;

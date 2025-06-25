import React from 'react';

const MessageOther: React.FC = () => {
  const props = {
    text: "Hello, how are you?",
    time: "2:30 PM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "John Doe",
  };

  return (
    <div className="flex items-start gap-3 mb-4">
      <img src={props.image} alt={props.name} className="w-8 h-8 rounded-full object-cover" />
      <div>
        <div className="text-xs text-gray-500 mb-1">{props.name}</div>
       <div className="bg-white px-4 py-2 rounded-lg text-sm text-gray-800 shadow break-words max-w-xs whitespace-pre-wrap">
  {props.text}
</div>

        <div className="text-[10px] text-gray-400 mt-1">{props.time}</div>
      </div>
    </div>
  );
};

export default MessageOther;

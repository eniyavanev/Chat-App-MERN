import React, { useRef, useState } from "react";
import {
  MdDelete,
  MdAttachFile,
  MdInsertPhoto,
} from "react-icons/md";
import {
  IoSend,
  IoDocumentTextOutline,
  IoVideocam,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import type { EmojiClickData, Theme } from "emoji-picker-react";
import type { RootState } from "./Redux/Store/store";
import { motion, AnimatePresence } from "framer-motion";

import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";

const ChatArea: React.FC = () => {
  const isDark = useSelector((state: RootState) => state.theme.theme);

  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

  const imageRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const themeBase = isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
  const themeHeader = isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800";
  const themeChat = isDark ? "bg-gray-800" : "bg-gray-50";
  const inputStyle = isDark
    ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
    : "bg-white border-gray-300 text-gray-800";

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(`${type} selected:`, file);
    }
  };

  return (
    <div
      className={`flex-[0.7] flex flex-col m-3 rounded-2xl md:overflow-hidden relative ${themeBase}`}
    >
      {/* Header */}
      <div
        className={`flex-shrink-0 px-4 py-3 shadow-sm ${themeHeader} flex items-center justify-between`}
      >
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
        <button
          title="Delete Chat"
          className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-300"
        >
          <MdDelete className="text-xl" />
        </button>
      </div>

      {/* Message List */}
      <div className={`flex-1 min-h-0 overflow-auto p-4 ${themeChat}`}>
        {[...Array(5)].map((_, i) => (
          <React.Fragment key={i}>
            <MessageOther />
            <MessageSelf />
          </React.Fragment>
        ))}
      </div>

      {/* Emoji Picker */}
      <AnimatePresence>
        {showEmojiPicker && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[100px] left-4 z-10"
          >
            <EmojiPicker
              theme={isDark ? ("dark" as Theme) : ("light" as Theme)}
              onEmojiClick={handleEmojiClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Attachment Options */}
      <AnimatePresence>
        {showAttachmentOptions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[100px] left-12 z-10 flex flex-col gap-2 p-2 rounded-xl shadow-md bg-white dark:bg-gray-800"
          >
            <button
              onClick={() => imageRef.current?.click()}
              className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <MdInsertPhoto className="text-xl text-pink-500" />
              <span>Image</span>
            </button>
            <button
              onClick={() => videoRef.current?.click()}
              className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <IoVideocam className="text-xl text-blue-500" />
              <span>Video</span>
            </button>
            <button
              onClick={() => fileRef.current?.click()}
              className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <IoDocumentTextOutline className="text-xl text-green-500" />
              <span>Document</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Inputs */}
      <input
        type="file"
        accept="image/*"
        ref={imageRef}
        onChange={(e) => handleFileChange(e, "Image")}
        className="hidden"
      />
      <input
        type="file"
        accept="video/*"
        ref={videoRef}
        onChange={(e) => handleFileChange(e, "Video")}
        className="hidden"
      />
      <input
        type="file"
        ref={fileRef}
        onChange={(e) => handleFileChange(e, "Document")}
        className="hidden"
      />

      {/* Input Section */}
      <div className={`flex-shrink-0 px-4 py-3 shadow-sm ${themeHeader}`}>
        <div className="flex items-center gap-2 relative">
          <button
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className="text-xl px-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            😀
          </button>
          <button
            onClick={() => setShowAttachmentOptions((prev) => !prev)}
            className="text-xl px-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <MdAttachFile />
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`flex-1 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputStyle}`}
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

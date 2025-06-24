import React from 'react';
import LiveChat from '../assets/Icons/live-chat.png';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  return (
    <div className="w-[90vw] h-[90vh] rounded-[20px] flex items-center justify-center bg-gray-100">
      {/* Animated Container */}
      <motion.div
        className="bg-white rounded-[20px] shadow-lg w-full h-full flex flex-col md:flex-row overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full bg-blue-50 flex items-center justify-center p-6 sm:p-10">
          <motion.img
            src={LiveChat}
            alt="Live Chat"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Login
          </h1>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-gray-600 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-gray-600 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Login Button */}
          <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition w-full">
            Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { motion } from "framer-motion";
import LiveChat from "../assets/Icons/live-chat.png";
import { Link, useNavigate } from "react-router-dom";
import { loginUserApi } from "../api/authentication";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUserApi(loginInputs);
      toast.success(res?.data?.message || "Login successful");
      navigate("/main/Welcome"); // or homepage after login
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-[90vw] h-[90vh] flex items-center justify-center bg-gray-100 rounded-2xl">
      <motion.div
        className="bg-white w-full h-full flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-6 sm:p-10">
          <motion.img
            src={LiveChat}
            alt="Live Chat"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Login
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={loginInputs.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={loginInputs.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#06DAAE] hover:bg-[#05c09c] text-white py-2 rounded-md transition"
            >
              Login
            </button>

            <Link to="/signup">
              <p className="text-sm text-center">
                Don't have an account? Click here to{" "}
                <span className="text-blue-500 font-bold">Sign Up</span>
              </p>
            </Link>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

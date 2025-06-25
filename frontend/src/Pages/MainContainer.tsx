import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Layouts/Sidebar";

const MainContainer: React.FC = () => {
  return (
    <div className="w-full h-screen md:h-[90vh] md:w-[90vw] mx-auto flex flex-col md:flex-row gap-3 bg-[#f4f5f8] rounded-2xl md:p-2">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainContainer;

import React from "react";
import Sidebar from "../Components/Layouts/Sidebar";

import { Outlet } from "react-router-dom";

const MainContainer: React.FC = () => {
  return (
    <div className="h-screen w-full  md:h-[90vh] md:w-[90vw] mx-auto flex  md:flex-row gap-3 rounded-2xl md:p-2 bg-[#f4f5f8]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainContainer;

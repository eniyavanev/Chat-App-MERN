import React from "react";
import MainContainer from "./Pages/MainContainer";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import CreateGroup from "./Pages/CreateGroup";
import ChatArea from "./Pages/ChatArea";
import OnlineUsers from "./Pages/OnlineUsers";
import AvailableGroups from "./Pages/AvailableGroups";
import Signup from "./Pages/Signup";

const App: React.FC = () => {
  return (
    <div className="bg-[#dddedd] min-h-[100vh] flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="main" element={<MainContainer />}>
        <Route path='Welcome' element={<Welcome/>}/>
        <Route path = 'ChatArea' element={<ChatArea/>}/>
        <Route path = 'OnlineUsers' element={<OnlineUsers/>}/>
        <Route path='CreateGroup' element={<CreateGroup/>}/>
        <Route path='AvailableGroups' element={<AvailableGroups/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

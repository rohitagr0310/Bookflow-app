import React from "react";
import Header from "./StudentHeader.jsx";
import { Outlet } from "react-router-dom";

const StudentPanel = () => {
  return (
    <div>
      <Header />
      <h1>Student Panel</h1>
      <Outlet/>
    </div>
  );
};

export default StudentPanel;

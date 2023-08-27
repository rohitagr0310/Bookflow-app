import React from "react";
import Header from "./StudentHeader.jsx";
import { Outlet } from "react-router-dom";

const StudentPanel = () => {
  return (
    <body >
      <div className="student-panel-container">
        <Header />
        <h1>Student Panel</h1>
        <div className="student-panel-content">
          <Outlet className="student-panel-outlet" />
        </div>
      </div>
    </body>

  );
};

export default StudentPanel;

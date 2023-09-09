import React from "react";
import Header from "./StudentHeader.jsx";
import { Outlet } from "react-router-dom";
import "./_StudentPanel.css";
import studentBackground from "../../images/studentBackground.jpg";
import {
  // Avatar,
  Box,
  // Button,
  Card,
  // CardActions,
  CardContent,
  autocompleteClasses
  // Divider,
  // Typography
} from "@mui/material";

const StudentPanel = () => {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
        ></Box>
        <body className="StudentPanel-container">
          <div className="student-panel-container" style={{
            backgroundImage: `url(${studentBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: autocompleteClasses
          }}>
            <Header />
            <h1>Student Panel</h1>
            <div className="student-panel-content">
              <Outlet className="student-panel-outlet" />
            </div>
          </div>
        </body>
      </CardContent>
    </Card>

  );
};
export default StudentPanel;

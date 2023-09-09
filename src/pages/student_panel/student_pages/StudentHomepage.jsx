import React from "react";
// import BookCard from "../../../components/card/Bookcard";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./_studenthomepage.css";

const StudentHomepage = () => {
  return (
    <div className="container">
      <Outlet />
      <h1 className="heading">Welcome to Student HomePage</h1>
      <Grid container spacing={2} className="heading">
      </Grid>
    </div>
  );
};

export default StudentHomepage;

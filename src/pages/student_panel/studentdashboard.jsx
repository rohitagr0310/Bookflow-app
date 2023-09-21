import React from "react";
import { Paper, Grid } from "@mui/material";
import Orders from "./StudentOrders";

const StudentDashboard = () => {
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Orders />
        </Paper>
      </Grid>
    </>
  );
};

export default StudentDashboard;

import React from "react";
import { Paper, Grid } from "@mui/material";
import BookTable from "./student_pages/StudentIssued";

const StudentDashboard = () => {
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <BookTable />
        </Paper>
      </Grid>
    </>
  );
};

export default StudentDashboard;

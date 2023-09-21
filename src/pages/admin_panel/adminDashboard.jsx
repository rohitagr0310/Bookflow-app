import React from "react";
import Deposits from "./Deposits";
import Orders from "./pending";
import { Paper, Grid, Container } from "@mui/material";

const AdminDashboard = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Deposits title="Total books in LIB" count="12,000" asOnDate="on 15 March, 2019" ctaLabel="View All Books" />
          <Deposits title="Total books in LIB" count="12,000" asOnDate="on 15 March, 2019" ctaLabel="View All Books" />
          <Deposits title="Total books in LIB" count="12,000" asOnDate="on 15 March, 2019" ctaLabel="View All Books" />
          <Deposits title="Total books in LIB" count="12,000" asOnDate="on 15 March, 2019" ctaLabel="View All Books" />
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AdminDashboard;

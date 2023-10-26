/* eslint-disable require-jsdoc */
import * as React from "react";
import Link from "@mui/material/Link";
import { Typography, Paper, Grid } from "@mui/material";
import { PropTypes } from "prop-types";

function preventDefault (event) {
  event.preventDefault();
}

const Deposits = (props) => {
  const { title, count, asOnDate, ctaLabel } = props;

  return (
    <React.Fragment>
      <Grid item xs={6} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240
          }}
        >
          <Typography component="h2" variant="h6" color="#000000" gutterBottom>
            {title}
          </Typography>
          <Typography component="p" variant="h4">
            {count}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {asOnDate}
          </Typography>
          <Link color="primary" href="#" onClick={preventDefault}>
            {ctaLabel}
          </Link>

        </Paper>
      </Grid>
    </React.Fragment>
  );
};

Deposits.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  asOnDate: PropTypes.string.isRequired,
  ctaLabel: PropTypes.string.isRequired
};

export default Deposits;

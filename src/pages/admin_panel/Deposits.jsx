/* eslint-disable require-jsdoc */
import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function preventDefault (event) {
  event.preventDefault();
}

export default function Deposits () {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Total books in LIB
      </Typography>
      <Typography component="p" variant="h4">
        12,000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View all books
        </Link>
      </div>

      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Total books in BB
      </Typography>
      <Typography component="p" variant="h4">
        50,000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View BB books
        </Link>
      </div>

      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Currently Issued books
      </Typography>
      <Typography component="p" variant="h4">
        40
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Issued Books
        </Link>
      </div>

    </React.Fragment>
  );
}

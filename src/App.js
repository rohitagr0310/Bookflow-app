/* eslint-disable require-jsdoc */
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/header/Header.js";
// Other imports and code
const theme = createTheme();

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {/* The rest of your app */}
      </div>
    </ThemeProvider>
  );
}
export default App;

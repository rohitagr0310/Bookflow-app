/* eslint-disable require-jsdoc */
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.js";
import LoginPage from "./components/login_page/LoginPage.js";
import AdminPanel from "./components/admin_panel/AdminPanel.js";
import StudentPanel from "./components/student_panel/StudentPanel.js";

const theme = createTheme();

/**
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */
function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPanel />} /> {/* Route to AdminPanel */}
            <Route path="/student" element={<StudentPanel />} /> {/* Route to StudentPanel */}
            {/* Other routes */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

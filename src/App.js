/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home_page/HomePage.js";
import AuthPage from "./components/login_page/AuthPage.js";
import AdminPanel from "./components/admin_panel/AdminPanel.js";
import StudentPanel from "./components/student_panel/StudentPanel.js";
import Footer from "./components/footer/Footer.js";
import QRCodeScanner from "./components/QRCodeScanner";

const theme = createTheme();

/*
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */
function App () {
  const [backendStatus, setBackendStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/status")
      .then(response => response.json())
      .then(data => setBackendStatus(data))
      .catch(error => console.error("Error connecting to backend:", error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <p>Backend Status: {backendStatus.message}</p>
        </div>
        <div className="App">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/qr" element={<QRCodeScanner />} /> {/* New Route */}
            <Route path="/student" element={<StudentPanel />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

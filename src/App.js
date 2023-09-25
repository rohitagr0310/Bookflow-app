/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll/scroll-to-top.jsx";
import HomePage from "./pages/home_page/HomePage.jsx";
import AuthPage from "./pages/login_page/AuthPage.jsx";
import AdminPanel from "./pages/admin_panel/AdminPanel.jsx";
import StudentPanel from "./pages/student_panel/StudentPanel.jsx";
import Footer from "./components/footer/Footer.jsx";
import AddBook from "./pages/admin_panel/admin_pages/AddBook.jsx";
import ManageStudents from "./pages/admin_panel/admin_pages/ManageStudents.jsx";
import IssuedBooks from "./pages/admin_panel/admin_pages/IssuedBooks.jsx";
import AllBooks from "./pages/admin_panel/admin_pages/AllBooks.jsx";
import StudentAccount from "./pages/student_panel/student_pages/StudentAccount.jsx";
import StudentHistory from "./pages/student_panel/student_pages/StudentHistory.jsx";
import Search from "./pages/student_panel/student_pages/StudentSearch.jsx";
import ForgetPassword from "./pages/login_page/ForgetPassword.jsx";
import AboutUs from "./pages/about_us/AboutUs.jsx";
import AdminHistory from "./pages/admin_panel/admin_pages/AdminHistory.jsx";
import PendingIssue from "./pages/admin_panel/admin_pages/PendingIssue.jsx";
import TermsAndConditions from "./pages/login_page/term_condition/TermsAndConditions";
import AdminDashboard from "./pages/admin_panel/adminDashboard.jsx";
import StudentDashboard from "./pages/student_panel/studentdashboard.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import EmailVerifiedPage from "./pages/email_verified/EmailVerified.jsx";
import StudentRequests from "./pages/student_panel/student_pages/StudentRequests.jsx";

/*
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */

function App () {
  const theme = createTheme();

  const userType = localStorage.getItem("userType") || "";

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <CssBaseline />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/password-reset" element={<ForgetPassword />} />
            <Route path="email-verified" element={<EmailVerifiedPage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            {userType === "A"
              ? (
                <Route path="admin" element={<AdminPanel />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="add-book" element={<AddBook />} />
                  <Route path="all-book" element={<AllBooks />} />
                  <Route path="manage-std" element={<ManageStudents />} />
                  <Route path="issued-book" element={<IssuedBooks />} />
                  <Route path="admin-history" element={<AdminHistory />} />
                  <Route path="pending-issue" element={<PendingIssue />} />
                </Route>
              )
              : (
                <Route path="student" element={<StudentPanel />}>
                  <Route index element={<StudentDashboard />} />
                  <Route path="account" element={<StudentAccount />} />
                  <Route path="history" element={<StudentHistory />} />
                  <Route path="search" element={<Search />} />
                  <Route path="requests" element={<StudentRequests/>}/>
                </Route>
              )}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

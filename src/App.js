/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home_page/HomePage.jsx";
import AuthPage from "./pages/login_page/AuthPage.jsx";
import AdminPanel from "./pages/admin_panel/AdminPanel.jsx";
import StudentPanel from "./pages/student_panel/StudentPanel.jsx";
import Footer from "./components/footer/Footer.jsx";
import AddBook from "./pages/admin_panel/admin_pages/AddBook.jsx";
import ManageStudents from "./pages/admin_panel/admin_pages/ManageStudents.jsx";
import IssuedBooks from "./pages/admin_panel/admin_pages/IssuedBooks.jsx";
import AllBooks from "./pages/admin_panel/admin_pages/AllBooks.jsx";
import BookIssued from "./pages/student_panel/student_pages/BooksIssued.jsx";
import StudentAccount from "./pages/student_panel/student_pages/StudentAccount.jsx";
import History from "./pages/student_panel/student_pages/History.jsx";
import Search from "./pages/student_panel/student_search/Search.jsx";
import StudentHomepage from "./pages/student_panel/student_pages/StudentHomepage.jsx";
import Feedback from "./pages/student_panel/student_pages/Feedback.jsx";
import ForgetPassword from "./pages/login_page/ForgetPassword.jsx";
import AboutUs from "./pages/about_us/AboutUs.jsx"; // Update the path as per your project structure
import AdminHistory from "./pages/admin_panel/admin_pages/AdminHistory.jsx";
import PendingIssue from "./pages/admin_panel/admin_pages/PendingIssue.jsx";

/*
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */
function App () {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="/password-reset" element={<ForgetPassword />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="admin" element={<AdminPanel />} >
              <Route path="add-book" element={<AddBook />} />
              <Route path="all-book" element={<AllBooks />} />
              <Route path="manage-std" element={<ManageStudents />} />
              <Route path="issued-book" element={<IssuedBooks />} />
              <Route path="admin-history" element={<AdminHistory />} />
              <Route path="pending-issue" element={<PendingIssue />} />
            </Route>
            <Route path="student" element={<StudentPanel />} >
              <Route path="std-account" element={<StudentAccount />} />
              <Route path="history" element={<History />} />
              <Route path="home" element={<StudentHomepage />} />
              <Route path="book-issued" element={<BookIssued />} />
              <Route path="search" element={<Search />} />
              <Route path="feed-back" element={<Feedback />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

/* eslint-disable react/jsx-no-undef */
/* eslint-disable require-jsdoc */
import React, { Suspense, lazy } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Loader from "./components/Loader.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll/scroll-to-top.jsx";
import HomePage from "./pages/home_page/HomePage.jsx";
import Footer from "./components/footer/Footer.jsx";

const AuthPage = lazy(() => import("./pages/login_page/AuthPage.jsx"));
const AdminPanel = lazy(() => import("./pages/admin_panel/AdminPanel.jsx"));
const StudentPanel = lazy(() => import("./pages/student_panel/StudentPanel.jsx"));
const AddBook = lazy(() => import("./pages/admin_panel/admin_pages/AddBook.jsx"));
const ManageStudents = lazy(() => import("./pages/admin_panel/admin_pages/ManageStudents.jsx"));
const IssuedBooks = lazy(() => import("./pages/admin_panel/admin_pages/IssuedBooks.jsx"));
const AllBooks = lazy(() => import("./pages/admin_panel/admin_pages/AllBooks.jsx"));
const StudentAccount = lazy(() => import("./pages/student_panel/student_pages/StudentAccount.jsx"));
const StudentHistory = lazy(() => import("./pages/student_panel/student_pages/StudentHistory.jsx"));
const Search = lazy(() => import("./pages/student_panel/student_pages/StudentSearch.jsx"));
const ForgetPassword = lazy(() => import("./pages/login_page/ForgetPassword.jsx"));
const AboutUs = lazy(() => import("./pages/about_us/AboutUs.jsx"));
const AdminHistory = lazy(() => import("./pages/admin_panel/admin_pages/AdminHistory.jsx"));
const PendingIssue = lazy(() => import("./pages/admin_panel/admin_pages/PendingIssue.jsx"));
const TermsAndConditions = lazy(() => import("./pages/login_page/term_condition/TermsAndConditions"));
const AdminDashboard = lazy(() => import("./pages/admin_panel/adminDashboard.jsx"));
const StudentDashboard = lazy(() => import("./pages/student_panel/studentdashboard.jsx"));
const ContactUs = lazy(() => import("./pages/contact-us/ContactUs.jsx"));
const EmailVerifiedPage = lazy(() => import("./pages/email_verified/EmailVerified.jsx"));
const StudentRequests = lazy(() => import("./pages/student_panel/student_pages/StudentRequests.jsx"));

/*
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */

function App () {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto Condensed"
    }
  });

  // const userType = localStorage.getItem("userType") || "";

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <CssBaseline />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={
              <Suspense fallback={<Loader />}>
                <AuthPage />
              </Suspense>
            } />
            <Route path="/terms-and-conditions" element={<Suspense fallback={<Loader />}>
              <TermsAndConditions />
            </Suspense>} />
            <Route path="/password-reset" element={<Suspense fallback={<Loader />}>
              <ForgetPassword />
            </Suspense>} />
            <Route path="email-verified" element={<Suspense fallback={<Loader />}>
              <EmailVerifiedPage />
            </Suspense>} />
            <Route path="about-us" element={<Suspense fallback={<Loader />}>
              <AboutUs />
            </Suspense>} />
            <Route path="contact-us" element={<Suspense fallback={<Loader />}>
              <ContactUs />
            </Suspense>} />
            <Route path="admin" element={<Suspense fallback={<Loader />}>
              <AdminPanel />
            </Suspense>}>
              <Route index element={<Suspense fallback={<Loader />}>
                <AdminDashboard />
              </Suspense>} />
              <Route path="add-book" element={<Suspense fallback={<Loader />}>
                <AddBook />
              </Suspense>} />
              <Route path="all-book" element={<Suspense fallback={<Loader />}>
                <AllBooks />
              </Suspense>} />
              <Route path="manage-std" element={<Suspense fallback={<Loader />}>
                <ManageStudents />
              </Suspense>} />
              <Route path="issued-book" element={<Suspense fallback={<Loader />}>
                <IssuedBooks />
              </Suspense>} />
              <Route path="admin-history" element={<Suspense fallback={<Loader />}>
                <AdminHistory />
              </Suspense>} />
              <Route path="pending-issue" element={<Suspense fallback={<Loader />}>
                <PendingIssue />
              </Suspense>} />
            </Route>

            <Route path="student" element={<Suspense fallback={<Loader />}>
              <StudentPanel />
            </Suspense>}>
              <Route index element={<Suspense fallback={<Loader />}>
                <StudentDashboard />
              </Suspense>} />
              <Route path="account" element={<Suspense fallback={<Loader />}>
                <StudentAccount />
              </Suspense>} />
              <Route path="history" element={<Suspense fallback={<Loader />}>
                <StudentHistory />
              </Suspense>} />
              <Route path="search" element={<Suspense fallback={<Loader />}>
                <Search />
              </Suspense>} />
              <Route path="requests" element={<Suspense fallback={<Loader />}>
                <StudentRequests />
              </Suspense>} />
            </Route>

          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

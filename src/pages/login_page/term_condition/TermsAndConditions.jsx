import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  const [isExpanded, setIsExpanded] = useState({
    account: false,
    privacy: false
  });

  const toggleExpansion = (section) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="terms-container">
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Terms and Conditions
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <h1 style={{ color: "#007bff", marginBottom: "20px" }}>
          Terms and Conditions for BookFlow - Library Management Web Application
        </h1>
        <p>Last Updated: 16-09-2023</p>
        <p>
          Welcome to BookFlow, a library management web application designed
          to enhance your reading experience. Before you begin using our
          services, please take a moment to carefully read and understand the
          following Terms and Conditions. By accessing or using the BookFlow
          application, you agree to be bound by these terms and conditions. If
          you do not agree with any part of these terms, please do not use our
          services.
        </p>
        <p
          onClick={() => toggleExpansion("account")}
          style={{ cursor: "pointer" }}
        >
          <strong>1. Account Registration:</strong>{" "}
          {isExpanded.account ? "-" : "+"}
        </p>
        {isExpanded.account && (
          <>
            <p>
              <strong>1.1.</strong> To use BookFlow, you must create an account
              by providing accurate and complete information. You agree to
              provide a valid email address and phone number for account
              verification purposes.
            </p>
            <p>
              <strong>1.2.</strong> Upon registration, you will receive
              confirmation messages to verify your email address and phone
              number.These confirmations are necessary for your accounts
              security.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("privacy")}
          style={{ cursor: "pointer" }}
        >
          <strong>2. Privacy and Data Security:</strong>{" "}
          {isExpanded.privacy ? "-" : "+"}
        </p>
        {isExpanded.privacy && (
          <>
            <p>
              <strong>2.1.</strong> BookFlow takes your privacy seriously. We
              collect and store your personal information, including your email
              address and phone number, securely.
            </p>
            <p>
              <strong>2.2.</strong> We use your contact information to send you
              important updates, notifications, and reminders related to your
              account, including overdue book reminders.
            </p>
            <p>
              <strong>2.3.</strong> Your password is stored in passphrase format,
              ensuring its security. Do not share your password with anyone.
            </p>
            <p>
              <strong>2.4.</strong> We may request access to your devices camera
              for the purpose of scanning QR codes. We do not store any images
              captured by your devices camera.
            </p>
          </>
        )}
        <hr/>
        <p
          onClick={() => toggleExpansion("issuingReturning")}
          style={{ cursor: "pointer" }}
        >
          <strong>3. Issuing and Returning Books:</strong>{" "}
          {isExpanded.issuingReturning ? "-" : "+"}
        </p>
        {isExpanded.issuingReturning && (
          <>
            <p>
              <strong>3.1.</strong> Users can borrow books from our library through
              the BookFlow web application.
            </p>
            <p>
              <strong>3.2.</strong> It is your responsibility to return borrowed books
              by the specified deadline. Failure to do so may result in overdue
              notices.
            </p>
            <p>
              <strong>3.3.</strong> We will send reminders about due dates to your
              registered email address and phone number. Please ensure your contact
              details are accurate and up to date.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("history")}
          style={{ cursor: "pointer" }}
        >
          <strong>4. History of Issued and Returned Books:</strong>{" "}
          {isExpanded.history ? "-" : "+"}
        </p>
        {isExpanded.history && (
          <>
            <p>
              <strong>4.1.</strong> BookFlow maintains a history of books you have
              borrowed and returned, which can be viewed in your account.
            </p>
            <p>
              <strong>4.2.</strong> Administrators also have access to the history of
              books issued and returned by users.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("communication")}
          style={{ cursor: "pointer" }}
        >
          <strong>5. Communication:</strong>{" "}
          {isExpanded.communication ? "-" : "+"}
        </p>
        {isExpanded.communication && (
          <>
            <p>
              <strong>5.1.</strong> We may contact you via email or phone if you have
              not returned a borrowed book by the deadline.
            </p>
            <p>
              <strong>5.2.</strong> We may use your provided contact information to
              send you newsletters, updates, and other important announcements related
              to BookFlow. You can opt out of these communications at any time.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("acceptableUse")}
          style={{ cursor: "pointer" }}
        >
          <strong>6. Acceptable Use:</strong>{" "}
          {isExpanded.acceptableUse ? "-" : "+"}
        </p>
        {isExpanded.acceptableUse && (
          <>
            <p>
              <strong>6.1.</strong> You agree to use BookFlow in accordance with
              applicable laws and regulations. You shall not use our services for any
              unlawful or prohibited purpose.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("modificationOfTerms")}
          style={{ cursor: "pointer" }}
        >
          <strong>7. Modification of Terms:</strong>{" "}
          {isExpanded.modificationOfTerms ? "-" : "+"}
        </p>
        {isExpanded.modificationOfTerms && (
          <>
            <p>
              <strong>7.1.</strong> BookFlow reserves the right to modify these Terms
              and Conditions at any time. Changes will be effective upon posting.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("termination")}
          style={{ cursor: "pointer" }}
        >
          <strong>8. Termination:</strong>{" "}
          {isExpanded.termination ? "-" : "+"}
        </p>
        {isExpanded.termination && (
          <>
            <p>
              <strong>8.1.</strong> We reserve the right to terminate or suspend your
              account and access to our services at our discretion, without prior
              notice, for any violation of these Terms and Conditions.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("disclaimer")}
          style={{ cursor: "pointer" }}
        >
          <strong>9. Disclaimer:</strong>{" "}
          {isExpanded.disclaimer ? "-" : "+"}
        </p>
        {isExpanded.disclaimer && (
          <>
            <p>
              <strong>9.1.</strong> BookFlow is provided as is and without warranties
              of any kind, either express or implied. We do not guarantee the
              availability or accuracy of our services.
            </p>
          </>
        )}
        <hr />
        <p
          onClick={() => toggleExpansion("contactInformation")}
          style={{ cursor: "pointer" }}
        >
          <strong>10. Contact Information:</strong>{" "}
          {isExpanded.contactInformation ? "-" : "+"}
        </p>
        {isExpanded.contactInformation && (
          <>
            <p>
              <strong>10.1.</strong> For questions, concerns, or inquiries about these
              Terms and Conditions, please contact us at [Contact Email or Phone
              Number].
            </p>
          </>
        )}
        <p>
          By using the BookFlow web application, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions. Thank you for
          choosing BookFlow for your reading and library management needs.
        </p>
      </div>
    </div>
  );
};
export default TermsAndConditions;

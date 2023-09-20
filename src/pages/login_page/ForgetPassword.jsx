import React, { useState } from "react";
import "./_ForgetPassword.css";
import TimedPopup from "../../components/timedpopup/TimedPopup";

const validatePassword = (password) => {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  // Check if the password has at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return "Password must have at least one uppercase letter.";
  }

  // Check if the password has at least one digit
  if (!/\d/.test(password)) {
    return "Password must have at least one digit.";
  }

  // Check if the password has at least one special character
  if (!/[@$!%*?&]/.test(password)) {
    return "Password must have at least one special character.";
  }

  // Password meets all conditions
  return null;
};

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupSeverity, setPopupSeverity] = useState("success");

  const handleStep1Submit = async (e) => {
    e.preventDefault();

    try {
    // Send a request to your backend to initiate the password reset and send OTP
      const response = await fetch("/.netlify/functions/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
      // If the request is successful, proceed to step 2
        setStep(2);

        // Show a success message using the TimedPopup component
        setPopupMessage("OTP sent successfully!");
        setPopupSeverity("success");
        setPopupOpen(true);
      } else {
      // Handle error responses from the backend
        console.error("Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleStep2Submit = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword(password);
    if (passwordError) {
      setPopupMessage(passwordError);
      setPopupSeverity("error");
      setPopupOpen(true);
      return;
    }

    if (password === confirmPassword) {
      try {
      // Send a request to your backend to verify the OTP and update the password
        const response = await fetch("/.netlify/functions/forget-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, otp, password })
        });

        if (response.ok) {
        // If the password reset is successful, provide feedback to the user
          console.log("Password updated successfully.");

          // Show a success message using the TimedPopup component
          setPopupMessage("Password updated successfully!");
          setPopupSeverity("success");
          setPopupOpen(true);

          setPassword("");
          setConfirmPassword("");
          setOtp("");
        } else {
        // Handle error responses from the backend
          console.error("Failed to reset password.");
        }
      } catch (error) {
        console.error("Error resetting password:", error);
      }
    } else {
    // Handle password mismatch
      setPopupMessage("Password and Confirm Password does not match");
      setPopupSeverity("error");
      setPopupOpen(true);
      console.error("Passwords do not match.");
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-form">
        {step === 1 && (
          <form onSubmit={handleStep1Submit}>
            <h2>Forgot Password?</h2>
            <p>Enter your email address to reset your password.</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="submit">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleStep2Submit}>
            <h2>Reset Your Password</h2>
            <p>Enter the OTP received via email, your new password, and confirm it.</p>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="submit">
              Reset Password
            </button>
          </form>
        )}
        <TimedPopup
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          message={popupMessage}
          severity={popupSeverity}
        />
      </div>
    </div>
  );
};

export default ForgetPassword;

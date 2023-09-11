import React, { useState } from "react";
import "./_ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleStep1Submit = (e) => {
    e.preventDefault();
    // Add logic to send a reset password link to the provided email
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Add logic to update the password
      console.log("Password updated successfully.");
    } else {
      // Handle password mismatch
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
            <button type="submit" className="submit">Send Reset Link</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleStep2Submit}>
            <h2>Reset Your Password</h2>
            <p>Enter your new password and confirm it.</p>
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
            <button type="submit" className="submit">Reset Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;

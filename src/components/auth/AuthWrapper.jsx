import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthWrapper (props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("userType");
    console.log("Props ", login, login !== "U");
    if (login !== "A" && login !== "U") navigate("/login");
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default AuthWrapper;

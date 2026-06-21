import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");

    const redirectPath = location.state?.from?.pathname || "/";

    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

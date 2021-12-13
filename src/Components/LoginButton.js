import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/LoginButton.css";

function LoginButton() {
  return (
    <>
      <Link to="/login">
        <button className="login-button">Giriş Yap</button>
      </Link>
    </>
  );
}

export default LoginButton;

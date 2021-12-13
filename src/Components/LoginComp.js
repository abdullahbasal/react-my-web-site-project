import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/components/LoginComp.css";
import { useForm } from "react-hook-form";

export default function LoginComp() {
  return (
    <>
      <Link to="/register">
        <p>Kayıt Ol</p>
      </Link>{" "}
    </>
  );
}

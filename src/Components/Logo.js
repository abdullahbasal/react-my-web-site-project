import React from "react";
import { Container, Col } from "react-bootstrap";
import "../styles/components/Logo.css";
export default function Logo(props) {
  return (
    <Container>
      <Col>
        <img src={props.img} className="logo-img" />
      </Col>
    </Container>
  );
}

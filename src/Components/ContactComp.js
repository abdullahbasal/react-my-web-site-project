import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/ContactComp.css";
export default function ContactComp() {
  return (
    <Container className="contactComp-container">
      <Row>
        <Col md="6">Resim</Col>
      </Row>
      <Row>
        <Col md="6">YAZI</Col>
        <Col md="6">Yazı</Col>
      </Row>
    </Container>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/AboutComp.css";
export default function AboutComp() {
  return (
    <Container className="aboutComp-container">
      <Row>
        <Col md="6">Domainismi.com Size Neler Sunuyor?</Col>
        <Col md="6">Resim</Col>
      </Row>
      <Row>
        <Col md="6">Resim</Col>
        <Col md="6">Neden? Domainismi.com</Col>
      </Row>
      <Row>
        <Col md="6">Vizyonumuz</Col>
        <Col md="6">Resim</Col>
      </Row>
    </Container>
  );
}

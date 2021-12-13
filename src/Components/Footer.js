import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import "../styles/components/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <Container className="footer-container">
      <Row className="footer-row">
        <Col className="footer-col">
          <FooterTop />
        </Col>
      </Row>
      <Row className="footer-row">
        <Col className="footer-col">
          <FooterBottom />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

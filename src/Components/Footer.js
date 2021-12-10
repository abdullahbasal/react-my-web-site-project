import React from "react";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import "../styles/components/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <FooterTop />
        </Col>
      </Row>
      <Row>
        <Col>
          <FooterBottom />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

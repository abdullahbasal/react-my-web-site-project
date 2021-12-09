import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/annonce.css";
import megaphone from "../images/megaphone.png";
function Annonce() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <img src={megaphone} />
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Annonce;

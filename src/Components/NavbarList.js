import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NavbarList() {
  return (
    <Container className="navbar-list">
      <Row>
        <Col>OYUNLAR</Col>
        <Col>WEB SITE TANITIM</Col>
        <Col>HESAP SATIŞ</Col>
        <Col>BLOG</Col>
        <Col>FORUM</Col>
      </Row>
    </Container>
  );
}

export default NavbarList;

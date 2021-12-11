import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/NavbarTop.css";
function NavbarTop(props) {
  return (
    <>
      <Container className="navbar-top-container">
        <Row>
          <Col>
            <p>Türkiye'nin En Büyük İlan Sitesi</p>
          </Col>
          <Col className="navbar-top-list">
            <ul>
              <li>Blog</li>
              <li>Hakkımızda</li>
              <li>İletişim</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NavbarTop;

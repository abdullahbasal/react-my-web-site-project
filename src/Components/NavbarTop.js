import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/components/NavbarTop.css";
function NavbarTop() {
  return (
    <>
      <Container className="navbar-top-container">
        <Row>
          <Col>
            <p>Türkiye'nin En Büyük İlan Sitesi</p>
          </Col>
          <Col className="navbar-top-list">
            <ul className="navbar-list">
              <li className="navbar-list-item">Blog</li>

              <Link to="/about">
                <li className="navbar-list-item">Hakkımızda</li>
              </Link>
              <Link to="/contact">
                <li className="navbar-list-item">İletişim</li>
              </Link>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NavbarTop;

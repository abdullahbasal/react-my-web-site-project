import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/components/Categorys.css";
import CategoryButton from "./CategoryButton";
function Categorys() {
  return (
    <>
      <Container className="category-container">
        <Row>
          <Col className="category-col" md="3">
            <CategoryButton title="OYUN ARKADAŞI İLANLARI"></CategoryButton>
          </Col>
          <Col md="3">
            <CategoryButton title="DİSCORD SUNUCULARI"></CategoryButton>
          </Col>
          <Col md="3">
            <CategoryButton title="TWİTCH KANALLARI"></CategoryButton>
          </Col>
          <Col md="3">
            <CategoryButton title="YOUTUBE KANALLARI"></CategoryButton>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <CategoryButton title="HESAP İLANLARI"></CategoryButton>
          </Col>
          <Col md="3">
            <CategoryButton title="SİTE TANITIMLARI"></CategoryButton>
          </Col>
          <Col md="3">
            <CategoryButton title="SERVER TANITIMLARI"></CategoryButton>
          </Col>
          <Col md="3">
            <CategoryButton title="TAKIMLAR"></CategoryButton>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Categorys.propTypes = {};

export default Categorys;

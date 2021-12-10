import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/components/Categorys.css";
import CategoryButton from "./CategoryButton";
function Categorys() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CategoryButton title="BİLGİSAYAR OYUNLARI"></CategoryButton>
          </Col>
          <Col>
            <CategoryButton title="DİSCORD SUNUCULARI"></CategoryButton>
          </Col>
          <Col>
            <CategoryButton title="BİLGİSAYAR OYUNLARI"></CategoryButton>
          </Col>
          <Col>
            <CategoryButton title="YOUTUBE KANALLARI"></CategoryButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <CategoryButton title="HESAP İLANLARI"></CategoryButton>
          </Col>
          <Col>
            <CategoryButton title="SİTE TANITIMLARI"></CategoryButton>
          </Col>
          <Col>
            <CategoryButton title="SERVER TANITIMLARI"></CategoryButton>
          </Col>
          <Col>
            <CategoryButton title="TAKIMLAR"></CategoryButton>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Categorys.propTypes = {};

export default Categorys;

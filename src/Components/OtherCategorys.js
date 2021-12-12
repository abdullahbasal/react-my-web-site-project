import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OtherCards from "./OtherCards";
import "../styles/components/OtherCategorys.css";
import MyButton from "./MyButton";
export default function OtherCategorys() {
  return (
    <Container className="other-categorys-container">
      <Row>
        <Col>
          <h3>Diğer İlanlar</h3>
        </Col>
      </Row>
      <Row>
        <OtherCards></OtherCards>
      </Row>
      <Row>
        <Col className="other-category-div">
          <MyButton
            title="Tüm Oyunlar"
            backgroundColorCode="red"
            colorCode="white"
          ></MyButton>
          <MyButton
            title="Kategori İstek"
            backgroundColorCode="orange"
            colorCode="white"
          ></MyButton>
        </Col>
      </Row>
    </Container>
  );
}

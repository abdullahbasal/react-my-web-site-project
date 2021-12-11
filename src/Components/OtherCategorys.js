import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OtherCards from "./OtherCards";
export default function OtherCategorys() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Diğer İlanlar</h3>
        </Col>
      </Row>
      <Row>
        <OtherCards></OtherCards>
      </Row>
    </Container>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameCard from "./GameCard";
function GameCategory() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Oyunlar</h3>
        </Col>
      </Row>
      <Row>
        <GameCard></GameCard>
      </Row>
    </Container>
  );
}

export default GameCategory;

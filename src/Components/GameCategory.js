import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameCard from "./GameCard";
import "../styles/components/GameCategory.css";
import MyButton from "./MyButton";
function GameCategory() {
  return (
    <Container className="game-category-container">
      <Row>
        <Col>
          <h3>Oyunlar</h3>
        </Col>
      </Row>
      <Row>
        <GameCard></GameCard>
      </Row>
      <Row>
        <Col className="game-category-div">
          <MyButton
            title="Tüm Oyunlar"
            backgroundColorCode="red"
            colorCode="white"
          ></MyButton>
          <MyButton
            title="Oyun İstek"
            backgroundColorCode="orange"
            colorCode="white"
          ></MyButton>
        </Col>
      </Row>
    </Container>
  );
}

export default GameCategory;

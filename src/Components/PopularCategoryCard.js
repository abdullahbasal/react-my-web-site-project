import React from "react";
import { Card, Col } from "react-bootstrap";

import "../styles/components/PopularCategoryCard.css";
export default function PopularCategoryCard() {
  return (
    <>
      <Col className="card-col popular-category-card-col" md="3">
        <Card className="popular-category-card">
          <Card.Img
            className="popular-category-card-img"
            variant="top"
            src="https://cdn.gracza.pl/galeria/gry13/1974317d.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

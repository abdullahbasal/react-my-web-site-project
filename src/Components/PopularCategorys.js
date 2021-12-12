import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PopularCategoryCard from "./PopularCategoryCard";
import "../styles/components/PopularCategorys.css";

export default function PopularCategorys() {
  return (
    <Container className="popular-categorys-container">
      <Row>
        <h3>Popüler Kategoriler</h3>
      </Row>
      <Row>
        <Col className="popular-category-div">
          <PopularCategoryCard></PopularCategoryCard>
          <PopularCategoryCard></PopularCategoryCard>
          <PopularCategoryCard></PopularCategoryCard>
        </Col>
      </Row>
    </Container>
  );
}

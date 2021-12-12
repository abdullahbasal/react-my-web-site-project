import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../styles/components/OwlCarouselRound.css";
import PopularCategoryCard from "./PopularCategoryCard";
import "../styles/components/PopularCategorys.css";

export default function PopularCategorys() {
  return (
    <Container>
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

import React from "react";
import { Container, Col } from "react-bootstrap";
import "../styles/components/HorizontalBanner.css";
function HorizontalBanner(props) {
  return (
    <Container className="banner">
      <Col>
        <a href={props.url}>
          <img className="banner-img" src={props.img} />
        </a>
      </Col>
    </Container>
  );
}

export default HorizontalBanner;

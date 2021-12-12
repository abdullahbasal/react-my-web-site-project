import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../images/1.jpg";
import "../styles/components/ImagesComp.css";
export default function ImagesComp() {
  return (
    <Container className="images-comp-continer">
      <Row>
        <Col md="3">
          <Row>
            <Col>
              <img src={img1} className="images-comp-img" />
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={img1} className="images-comp-img" />
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <img src={img1} className="images-comp-img" />
        </Col>
        <Col md="3">
          <Row>
            <Col>
              <img src={img1} className="images-comp-img" />
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={img1} className="images-comp-img" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../styles/components/Slider.css";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

function Slider() {
  return (
    <Container>
      <Row>
        <Col sm={8} className="slider-carousel">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={img1}
                height="300px"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={img2}
                height="300px"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                height="300px"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={4}>
          <Row>
            <Col>
              <img src={img2} className="slider-near-img1"></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={img3} className="slider-near-img2"></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Slider;

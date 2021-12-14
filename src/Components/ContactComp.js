import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/ContactComp.css";
import Contact from "../images/contact.png";
import Like from "../images/like.png";
import Mail from "../images/mail.png";
import Web from "../images/web.png";
export default function ContactComp() {
  return (
    <Container className="contactComp-container">
      <div>
        <Row className="justify-content-center">
          <Row>
            <Col md="12">
              <img src={Contact} width={400} height={200} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Row>
                <Col>
                  <img
                    src={Mail}
                    width={30}
                    height={30}
                    style={{ display: "inline-block", marginBottom: "7px" }}
                  />
                  <h4 style={{ display: "inline-block", margin: "0px" }}>
                    Mail Adresimiz
                  </h4>
                </Col>
              </Row>
              <Row>
                <p>domainismi@domainismi.com</p>
              </Row>
              <Row>
                <Col>
                  <img
                    src={Web}
                    width={25}
                    height={25}
                    style={{ display: "inline-block", marginBottom: "7px" }}
                  />
                  <h4
                    style={{
                      display: "inline-block",
                      margin: "0px",
                    }}
                  >
                    Yapımcı Kişisel Web Sitesi
                  </h4>
                </Col>
              </Row>
              <Row>
                <a
                  href="https://www.abdullahbasal.com"
                  style={{ textDecoration: "none" }}
                >
                  <p>www.abdullahbasal.com</p>
                </a>
              </Row>
            </Col>
            <Col md="6">
              <Row>
                <Col>
                  <h3>Bizimle İletişime Geçtiğiniz İçin Teşekkür Ederiz :)</h3>
                </Col>
                <Row>
                  <Col>
                    <img
                      src={Like}
                      width={250}
                      height={250}
                      style={{ marginBottom: "20px" }}
                    />
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
}

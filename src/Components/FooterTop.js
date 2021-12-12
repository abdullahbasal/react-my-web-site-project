import React from "react";
import "../styles/components/FooterTop.css";
import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./MyButton";
import WebImg from "../images/world-wide-web.png";
import SearchGameFriendImg from "../images/opponent.png";
import RoketImg from "../images/project.png";

export default function FooterTop() {
  return (
    <Container className="footer-top">
      <div className="footer-top-div">
        <Col>
          <Row>
            <Col>
              <h5 className="footer-top-title">Oyun Arkadaşı Bul</h5>
              <p className="footer-top-paragraph">
                Oyun Arkadaşını Bul ve Zaferin Tadını çıkar.
              </p>
            </Col>
            <Col>
              <img src={SearchGameFriendImg} width={90} height={90} />
            </Col>
          </Row>
        </Col>
        <Col>
          <MyButton
            title="İlan Ver"
            backgroundColorCode="red"
            colorCode="white"
          ></MyButton>
        </Col>
      </div>
      <div className="footer-top-div">
        <Col>
          <Row>
            <Col>
              <h5 className="footer-top-title">Web Siteni Tanıt</h5>
              <p className="footer-top-paragraph">
                Web Siteni Ücretsiz Tanıt Popülerliğini Arttır.
              </p>
            </Col>
            <Col>
              <img src={WebImg} width={90} height={90} />
            </Col>
          </Row>
        </Col>
        <Col>
          <MyButton
            title="İlan Ver"
            backgroundColorCode="red"
            colorCode="white"
          ></MyButton>
        </Col>
      </div>
      <div className="footer-top-div">
        <Col>
          <Row>
            <Col>
              <h5 className="footer-top-title">Diğer İlanlar</h5>
              <p className="footer-top-paragraph">
                Hesap, Discord, Youtube, Twitch ilanları
              </p>
            </Col>
            <Col>
              <img src={RoketImg} width={90} height={90} />
            </Col>
          </Row>
        </Col>
        <Col>
          <MyButton
            title="İlan Ver"
            backgroundColorCode="red"
            colorCode="white"
          ></MyButton>
        </Col>
      </div>
    </Container>
  );
}

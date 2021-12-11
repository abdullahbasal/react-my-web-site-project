import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/Annonce.css";
import megaphone from "../images/megaphone.png";
import AddAdvert from "../Components/AddAdvert";
function Annonce() {
  return (
    <>
      <Container className="annonce-container">
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <br />

            <img src={megaphone} />
          </Col>
          <Col md="7">
            <h2>Ücretsiz İlan Ver</h2>
            <p>
              Oyun keyfi arkadaşlarla çıkar. Oyun keyfini katlamak, yeni
              arkadaşlıklar edinmek için web sitemizde ilan verip yeni
              bağlantılar kurabilirsin. Oyun arkadaşının yanı sıra Hesap Satış,
              Sunucu Tanıtım ilanları verebilir, Twitch ve YouTube kanalı
              tanıtımı yapabilirsin!
            </p>
          </Col>
          <Col xs lg="3">
            <br />

            <AddAdvert></AddAdvert>
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
}

export default Annonce;

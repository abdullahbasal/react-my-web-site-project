import React from "react";
import "../styles/components/FooterBottom.css";
import { Col, Container, Row } from "react-bootstrap";
import DiscordImg from "../images/discord-logo.png";
import GgImg from "../images/gg.png";
import Term from "../images/term.png";

function FooterBottom() {
  return (
    <Container className="footer-bottom">
      <div className="footer-bottom-div">
        <Col>
          <Row>
            <Col>
              İlan Koşulları
              <br />
              Üyelik Koşulları
              <br />
              İletişim
            </Col>
            <Col>
              <img src={Term} width={90} height={90} />
            </Col>
          </Row>
        </Col>
      </div>
      <div className="footer-bottom-div">
        <Col>
          <Row>
            <Col>
              Discord
              <br />
              Discord Sunucumuza Katılın!
            </Col>
            <Col>
              <a href="https://discord.gg/bSUGrGD" target="_blank">
                <img
                  src={DiscordImg}
                  width={90}
                  height={90}
                  className="discord-img"
                />
              </a>
            </Col>
          </Row>
        </Col>
      </div>
      <div id="footer-bottom-last-div" className="footer-bottom-div">
        <Col>
          <Row>
            <Col>
              Domainismi.com
              <br />
              Keyifli oyunlar diler...
            </Col>
            <Col>
              <img src={GgImg} width={90} height={90} />
            </Col>
          </Row>
        </Col>
      </div>
      <Row>
        <Col style={{ verticalAlign: "middle" }}>
          <p>
            Domainismi.com bir{" "}
            <a
              href="https://www.AbdullahBasal.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              AbdullahBasal
            </a>{" "}
            Projesidir.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default FooterBottom;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OyunlarSimge from "../images/console.png";
import WebSiteSimge from "../images/world-wide-web.png";
import HesapSatisSimge from "../images/profile.png";
import BlogSimge from "../images/blogging.png";
import DiscordImg from "../images/discord-logo.png";
import "../styles/components/NavbarList.css";
function NavbarList() {
  return (
    <Container className="navbar-list">
      <Row className="navbar-list-row">
        <Col className="navbar-col">
          <img className="list-img" src={OyunlarSimge} />{" "}
          <p className="navbar-list-p"> OYUNLAR</p>
        </Col>
        <Col className="navbar-col">
          <img className="list-img" src={WebSiteSimge} />{" "}
          <p className="navbar-list-p"> WEB SITE TANITIM</p>
        </Col>
        <Col className="navbar-col">
          <img className="list-img" src={HesapSatisSimge} />{" "}
          <p className="navbar-list-p"> HESAP SATIŞ</p>
        </Col>
        <Col className="navbar-col">
          <img className="list-img" src={BlogSimge} />{" "}
          <p className="navbar-list-p">BLOG</p>
        </Col>
        <Col className="navbar-col">
          <img className="list-img" src={DiscordImg} />{" "}
          <a href="https://discord.gg/bSUGrGD" target="_blank">
            <p className="navbar-list-p"> DİSCORD</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarList;

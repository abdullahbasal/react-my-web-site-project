import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/AboutComp.css";
import Dart from "../images/dart.png";
import Team from "../images/team.png";
import Group from "../images/group.png";
export default function AboutComp() {
  return (
    <Container className="aboutComp-container">
      <div className="aboutComp-div">
        <Row>
          <Col md="6">
            <h4
              style={{
                color: "white",
              }}
            >
              Domain.com Hakkında
            </h4>
            <p style={{ textAlign: "left" }}>
              domain , Türkiyede'ki arkadaş arayan, oyunda rehberlik edecek
              kişiyi arayan, tek başına oynamaktan sıkılmış oyuncuları
              birleştirmeyi sağlayan projedir. Oluşturulan bu projede oyuncular
              arkadaşlarını bulmak için ücretsiz ilan verebilir.
              <br /> Birbirleriyle iletişim kurarak gerek bizim oluşturduğumuz
              sitemizin discordunda gerekse kendi discordlarında keyifli şekilde
              oyunlarını oynayabilirler.
              <br /> Amacımız Sitede keyif alacakları düzgün dürüst oyuncularla
              tanıştırıp keyifli bir şekilde zafer kazanmalarını sağlamaktır.
            </p>
          </Col>
          <Col md="6">
            <img
              src={Team}
              width={250}
              height={250}
              style={{ display: "inline-block", marginBottom: "7px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <img
              src={Group}
              width={250}
              height={250}
              style={{ display: "inline-block", marginBottom: "7px" }}
            />
          </Col>
          <Col md="6">
            <br />
            <h4
              style={{
                color: "white",
              }}
            >
              domain Neler yapabilirsiniz?
            </h4>
            <p style={{ textAlign: "left" }}>
              domain üzerinde ücretsiz ilan verebilirsiniz. İlan kategorilerini
              oyun arkadaşı bulmak üzere kurulan bu proje Web site, Twitch
              Kanalı, Youtube Kanalı, Discord Kanalı, Hesap ilanları ve Sunucu
              tanıtımları Yapabilirsiniz.
              <br /> Üstelik bunların hepsi ücretsiz. Sizin için Oluşturduğumuz
              Discord Kanalında sesli iletişimi kullanabilir arkadaşlarınız ile
              iletişim kurabilirsiniz.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <br />
            <h4
              style={{
                color: "white",
              }}
            >
              Vizyonumuz
            </h4>
            <p style={{ textAlign: "left" }}>
              Vizyon olarak Türkiyenin ileri gelen ilk önce oyuncu ilan sitesi
              sonrasın Web, Youtube, Twitch, Discord, Hesap tanıtım ilan
              sitelerinden olmakdır.
              <br />
              Türkçe açılmış olan bu siteyi Global olarak başka bir domain
              üzerinden diğer ülkelerin kullanımına da açmaktır.
            </p>
          </Col>
          <Col md="6">
            <img
              src={Dart}
              width={250}
              height={250}
              style={{ display: "inline-block", marginBottom: "7px" }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/components/ProfileComp.css";
import exampleprofileimg from "../images/exampleprofileimg.png";
import examplelevel from "../images/examplelevel.jpg";
import MyButton from "./MyButton";
export default function ProfileComp() {
  return (
    <Container className="profile-container">
      <Row>
        <Col className="profile-card-col profile-card-nick" md="4">
          <Col className="profile-img-col">
            <img className="profile-img" src={exampleprofileimg} />
          </Col>
          <Col>
            <h3>Waltoy</h3>
            <p>Üye</p>
            <p>İstanbul</p>
          </Col>
          <Col>
            <Col>
              <img src={examplelevel} style={{ display: "inline-block" }} />
            </Col>
            <MyButton
              title="Takip Et"
              backgroundColorCode="#206bc4"
              colorCode="white"
            />
            <MyButton
              title="Mesaj At"
              backgroundColorCode="white"
              colorCode="#206bc4"
            />
          </Col>
        </Col>
        <Col className="profile-card-col profile-card-info">
          <Row>
            <Col>
              <Row>
                <Col md="3">
                  <p style={{ display: "inline-block" }}>İsim</p>
                </Col>
                <Col md="9">
                  <p style={{ display: "inline-block" }}>Abdullah Başal</p>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="3">
                  <p style={{ display: "inline-block" }}>Kullanıcı ID</p>
                </Col>
                <Col md="9">
                  <p style={{ display: "inline-block" }}>36107</p>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="3">
                  <p style={{ display: "inline-block" }}>Yaş</p>
                </Col>
                <Col md="9">
                  <p style={{ display: "inline-block" }}>26</p>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="3">
                  <p style={{ display: "inline-block" }}>Şehir</p>
                </Col>
                <Col md="9">
                  <p style={{ display: "inline-block" }}>İstanbul</p>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="3">
                  <p style={{ display: "inline-block" }}>Üyelik Tarihi</p>
                </Col>
                <Col md="9">
                  <p style={{ display: "inline-block" }}>~3 ay</p>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="3">
                  <p style={{ display: "inline-block" }}>Hakkında</p>
                </Col>
                <Col md="9">
                  <p style={{ display: "inline-block" }}>
                    Oyun oynamayı sohbeti sever. Bilgisayar yazılımla uğraşır.
                  </p>
                </Col>
                <hr />
              </Row>
            </Col>
          </Row>

          <Row>
            <MyButton title="Düzenle" backgroundColorCode="#206bc4" />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="profile-card-col">Başarımlar</Col>
      </Row>
      <Row>
        <Col className="profile-card-col" md="4">
          Sosyal Medya
        </Col>
        <Col className="profile-card-col">ilanlar</Col>
      </Row>
      <Row>
        <Col className="profile-card-col" md="4">
          İletişim
        </Col>
        <Col className="profile-card-col">Oyunlar</Col>
        <Col className="profile-card-col">Takipçiler</Col>
      </Row>
    </Container>
  );
}

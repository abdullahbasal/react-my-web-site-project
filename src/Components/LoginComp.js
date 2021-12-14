import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/components/LoginComp.css";
import { useForm } from "react-hook-form";
import Hands from "../images/handshake.png";
import TeamWork from "../images/teamwork.png";
import Rocket from "../images/rocket.png";
import { Link } from "react-router-dom";

export default function LoginComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container className="loginComp-comp-container">
        <Row className="justify-content-center">
          <Col md="4" className="loginComp-left-side">
            <h5 style={{ textAlign: "center", margin: "15px" }}>Giriş Yap</h5>
            <div className="form-group">
              <label>E-posta adresi</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email (Gerekli)"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            <div className="form-group">
              <label>Şifre</label>
              <input
                type="password"
                className="form-control"
                placeholder="Şifre (Gerekli)  "
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 15,
                  pattern:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                })}
              />
            </div>
            <br />
            <button
              type="submit"
              style={{ marginBottom: "15px" }}
              className="submit btn btn-primary btn-block"
            >
              Giriş Yap
            </button>{" "}
            <Link to="/register">
              {" "}
              <button
                type="submit"
                style={{
                  marginBottom: "15px",
                  background: "red",
                  border: "red",
                }}
                className="submit btn btn-primary btn-block"
              >
                Kayıt Ol
              </button>
            </Link>
          </Col>
          <Col md="2"></Col>
          <Col md="6" className="loginComp-right-side">
            <div className="loginComp-right-side-div">
              <Row>
                <Col>
                  <h3>Domain.com Neden Üye Olmalıyım?</h3>
                </Col>
                <hr />
              </Row>
              <Row>
                <Col md="3">
                  <img src={Hands} width={90} height={90} />
                </Col>
                <Col md="9">
                  <Row>
                    <Col>
                      <h5>
                        <b>Güçlü Rakiplere Karşı El birliği</b>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Oyun Arkadaşını İlanlar Arasında Bul veya İlan Vererek
                        Arkadaş Edin. Böylece Güçlü Rakiplere karşı avantajlı
                        ol.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="3">
                  <img src={TeamWork} width={90} height={90} />
                </Col>
                <Col md="9">
                  <Row>
                    <Col>
                      <h5>
                        <b>Takımını Kur Veya Takıma Dahil Ol</b>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Kurulu Olan Takımını Tanıtabilir ve Oyuncu Bulabilirsin.
                        İstersen Bir Takıma Dahil Olup Yeni Takım Arkadaşları
                        ile Oyun Oynayabilirsin.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="3">
                  <img src={Rocket} width={90} height={90} />
                </Col>
                <Col md="9">
                  <Row>
                    <Col>
                      <h5>
                        <b>
                          İlan ver Tanıtımını Yap! Oyun Arkadaşı Ve Daha Fazlası
                        </b>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        İlan Vererek Oyun Arkadaşı Bulabilir. İsterseniz Twitch,
                        Youtube, Discord Kanallarınızı Tanıtabilirsiniz. Ayrıca
                        Web Siteniz, Sunucularınız ve Hesaplarınızı
                        Tanıtabilirsiniz.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
            </div>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

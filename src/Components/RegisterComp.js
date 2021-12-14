import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/components/RegisterComp.css";
import { useForm } from "react-hook-form";
import Hands from "../images/handshake.png";
import TeamWork from "../images/teamwork.png";
import Rocket from "../images/rocket.png";
import { Link } from "react-router-dom";

export default function RegisterComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container className="register-comp-container">
        <Row className="justify-content-center">
          <Col md="4" className="register-left-side">
            <h5 style={{ textAlign: "center", margin: "15px" }}>
              Yeni bir Hesap Oluştur
            </h5>

            <div className="form-group">
              <label>İsim</label>
              <input
                type="text"
                className="form-control"
                placeholder="İsim (Gerekli)"
                {...register("firstName", {
                  required: true,
                  max: 20,
                  min: 5,
                  maxLength: 20,
                  pattern: /[A - Za - zöçİğüÖÇĞÜşŞ]/,
                })}
              />
              {errors.firstName && (
                <p className="input-alert-message">
                  Minimum 3 karakter Maksimum 20 Karakter Giriniz.
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Soyisim</label>
              <input
                type="text"
                className="form-control"
                placeholder="Soyisim (Gerekli)"
                {...register("lastName", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                  pattern: /[A - Za - zöçİğüÖÇĞÜşŞ]/,
                })}
              />
              {errors.lastName && (
                <p className="input-alert-message">
                  Minimum 3 karakter Maksimum 20 Karakter Giriniz.
                </p>
              )}
            </div>
            <div className="form-group">
              <label>Kullanıcı Adı</label>
              <input
                type="text"
                className="form-control"
                placeholder="Kullanıcı Adı (Gerekli)"
                {...register("nickName", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                  pattern: /[az - ZA - Z - 0-9]/,
                })}
              />
              {errors.nickName && (
                <p className="input-alert-message">
                  Minimum 5 Maksimium 20 Karakter veya Sayı Giriniz
                </p>
              )}
            </div>
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
              {errors.email && (
                <p className="input-alert-message">
                  Lütfen Geçerli Email Giriniz
                </p>
              )}
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
              {errors.password && (
                <p className="input-alert-message">
                  Şifreniz 8 ile 15 Arasında Özel ifade Büyük/Küçük Harf ve Sayı
                  içermelidir.
                </p>
              )}
            </div>
            <div className="form-group">
              <label>Doğum Tarihi</label>
              <input
                type="datetime-local"
                className="form-control"
                placeholder="birthday"
                {...register("birthday", { required: true })}
              />
              {errors.birthday && (
                <p className="input-alert-message">
                  Lütfen Doğum Tarihinizi Giriniz
                </p>
              )}
            </div>

            <div className="form-group">
              <div className="option">
                <label>Cinsiyet</label>
                <select {...register("gender", { required: true })}>
                  <option value="">Cinsiyetinizi Seçiniz</option>
                  <option value="male">Erkek</option>
                  <option value="female">Kadın</option>
                </select>{" "}
                {errors.gender && (
                  <p style={{ display: "inline-block", color: "orange" }}>*</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Şehir</label>
              <div className="option">
                <select {...register("city", { required: true })}>
                  <option value="">İlinizi Seçiniz</option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="Ankara">Ankara</option>
                </select>{" "}
                {errors.city && (
                  <p
                    style={{
                      display: "inline-block",
                      color: "orange",
                      fontSize: "12px",
                    }}
                  >
                    *
                  </p>
                )}
              </div>
            </div>
            <br />
            <button
              type="submit"
              style={{ marginBottom: "15px" }}
              className="submit btn btn-primary btn-block"
            >
              KAYIT OL
            </button>
            <p>
              Zaten Bir Hesabım Var.{" "}
              <Link to="/login">
                <p
                  style={{
                    color: "#0d6efd",
                    display: "inline-block",
                    textDecoration: "underline",
                    textDecorationColor: "#0d6efd",
                  }}
                >
                  Giriş Yap
                </p>
              </Link>
            </p>
          </Col>
          <Col md="2"></Col>
          <Col md="6" className="register-right-side">
            <div className="register-right-side-div">
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

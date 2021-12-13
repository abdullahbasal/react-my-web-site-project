import React from "react";
import { Container, Col } from "react-bootstrap";
import "../styles/components/RegisterComp.css";
import { useForm } from "react-hook-form";

export default function RegisterComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Col md="6">
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
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
              <p style={{ display: "block", color: "orange" }}>
                Minimum 3 karakter Maksimum 20 Karakter Giriniz.
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Last name</label>
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
              <p style={{ display: "block", color: "orange" }}>
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
              <p style={{ display: "block", color: "orange" }}>
                Minimum 5 Maksimium 20 Karakter veya Sayı Giriniz
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Email address</label>
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
              <p style={{ display: "block", color: "orange" }}>
                Lütfen Geçerli Email Giriniz
              </p>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
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
              <p style={{ display: "block", color: "orange" }}>
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
              <p style={{ display: "block", color: "orange" }}>
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
              </select>
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
              </select>
              {errors.city && (
                <p style={{ display: "inline-block", color: "orange" }}>*</p>
              )}
            </div>
          </div>
          <br />
          <button type="submit" className="submit btn btn-primary btn-block">
            KAYIT OL
          </button>
        </Col>
      </Container>
    </form>
  );
}

import React from "react";
import "../styles/components/AddAdvert.css";
import { Col } from "react-bootstrap";
function AddAdvert() {
  return (
    <>
      <button className="add-advert">
        <Col className="blob red"></Col>
        <Col className="btn-input">ÜCRETSİZ İLAN EKLE</Col>
      </button>
    </>
  );
}

export default AddAdvert;

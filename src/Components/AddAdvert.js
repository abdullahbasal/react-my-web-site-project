import React from "react";
import "../styles/components/AddAdvert.css";
import { Col } from "react-bootstrap";
function AddAdvert() {
  return (
    <>
      <button className="add-advert">
        <div className="blob red"></div>
        <div className="btn-input">ÜCRETSİZ İLAN EKLE</div>
      </button>
    </>
  );
}

export default AddAdvert;

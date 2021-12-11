import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Row, Col } from "react-bootstrap";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../styles/components/OwlCarouselRound.css";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
function OwlCarouselRound() {
  return (
    /* Oyun kategorileri */
    <div>
      <OwlCarousel className="owl-theme" items="12" autoplay nav dots loop>
        <div className="item">
          <img src={img1}></img>
        </div>
        <div className="item">
          <img src={img2}></img>
        </div>
        <div className="item">
          <img src={img3}></img>
        </div>
        <div className="item">
          <img src={img4}></img>
        </div>
        <div className="item">
          <img src={img5}></img>
        </div>
        <div className="item">
          <img src={img6}></img>
        </div>
        <div className="item">
          <img src={img7}></img>
        </div>
        <div className="item">
          <img src={img8}></img>
        </div>
        <div className="item">
          <img src={img9}></img>
        </div>
        <div className="item">
          <img src={img10}></img>
        </div>
        <div className="item">
          <img src={img11}></img>
        </div>
        <div className="item">
          <img src={img12}></img>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default OwlCarouselRound;

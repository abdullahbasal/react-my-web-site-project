import React from "react";
import "../styles/pages/Home.css";
import Navbar from "../Components/Navbar";
import OwlCarouselRound from "../Components/OwlCarouselRound";
import Slider from "../Components/Slider";
import Annonce from "../Components/Annonce";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <OwlCarouselRound></OwlCarouselRound>
      <Slider></Slider>
      <Annonce></Annonce>
    </div>
  );
}

export default Home;

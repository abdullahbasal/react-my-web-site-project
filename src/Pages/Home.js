import React from "react";
import "../styles/pages/Home.css";
import Navbar from "../Components/Navbar";
import OwlCarouselRound from "../Components/OwlCarouselRound";
import Slider from "../Components/Slider";
import Annonce from "../Components/Annonce";
import { Container } from "react-bootstrap";
import Categorys from "../Components/Categorys";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <OwlCarouselRound></OwlCarouselRound>
        <Slider></Slider>
        <Annonce></Annonce>
        <Categorys></Categorys>
      </Container>
    </>
  );
}

export default Home;

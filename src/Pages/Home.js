import React from "react";
import "../styles/pages/Home.css";
import Navbar from "../Components/Navbar";
import OwlCarouselRound from "../Components/OwlCarouselRound";
import Slider from "../Components/Slider";
import Annonce from "../Components/Annonce";
import { Container } from "react-bootstrap";
import Categorys from "../Components/Categorys";
import HorizontalBanner from "../Components/HorizontalBanner";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <OwlCarouselRound></OwlCarouselRound>
        <Slider></Slider>
        <Annonce></Annonce>
        <Categorys></Categorys>
        <HorizontalBanner
          img="https://i.hizliresim.com/hzyfspf.jpg"
          url="https://accounts.binance.com/tr/register?ref=23719615"
        ></HorizontalBanner>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Home;

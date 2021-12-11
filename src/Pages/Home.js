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
import GameCategory from "../Components/GameCategory";
import OtherCategorys from "../Components/OtherCategorys";
import Info from "../Components/Info";
import HomeBlogPosts from "../Components/HomeBlogPosts";
import ImagesComp from "../Components/ImagesComp";
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <OwlCarouselRound></OwlCarouselRound>
        <Slider></Slider>
        <Annonce></Annonce>
        <Categorys></Categorys>
        <GameCategory></GameCategory>
        <ImagesComp></ImagesComp>
        <OtherCategorys></OtherCategorys>
        <HomeBlogPosts></HomeBlogPosts>{" "}
        <HorizontalBanner
          img="https://i.hizliresim.com/hzyfspf.jpg"
          url="https://accounts.binance.com/tr/register?ref=23719615"
        ></HorizontalBanner>
        <Info></Info>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Home;

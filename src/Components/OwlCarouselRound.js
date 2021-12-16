import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../styles/components/OwlCarouselRound.css";
import lol from "../images/lol.jpg";
import csgo from "../images/csgo.png";
import minecraft from "../images/minecraft.png";
import valorant from "../images/valorant.png";
import pubg from "../images/pubg.png";
import zula from "../images/zula.jpg";
import gta5 from "../images/gta5.png";
import discord from "../images/discord.png";
import websitecarousel from "../images/websitecarousel.png";
import youtube from "../images/youtube.png";
import twitch from "../images/twitch.png";
import account from "../images/account.png";

function OwlCarouselRound() {
  return (
    /* Oyun kategorileri */
    <div className="carousel-container">
      <OwlCarousel className="owl-theme" items="12" autoplay nav dots loop>
        <div className="item">
          <img src={lol} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={csgo} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={minecraft} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={valorant} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={pubg} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={zula} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={gta5} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={discord} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={twitch} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={websitecarousel} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={youtube} width={90} height={90}></img>
        </div>
        <div className="item">
          <img src={account} width={90} height={90}></img>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default OwlCarouselRound;

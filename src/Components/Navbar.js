import { Container, Row, Col } from "react-bootstrap";
import AddAdvert from "./AddAdvert";
import Search from "./Search";
import Logo from "./Logo";
import "../styles/components/Navbar.css";
import NavbarList from "./NavbarList";
import NavbarTop from "./NavbarTop";

import LoginButton from "./LoginButton";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-container">
      <NavbarTop></NavbarTop>
      <Container>
        <Row className="nav-container-row justify-content-md-center">
          <Col className="logo-col">
            <Link Link to="/">
              <Logo img="https://duobul.net/src/images/duobul_logotext_rect_new.png" />
            </Link>
          </Col>
          <Col>
            <Search></Search>
          </Col>
          <Col className="right-col">
            <AddAdvert></AddAdvert>

            <LoginButton></LoginButton>
          </Col>
        </Row>
      </Container>
      <Container className="navbar-list-container">
        <Row>
          <NavbarList></NavbarList>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;

import { Container, Row, Col } from "react-bootstrap";
import AddAdvert from "./AddAdvert";
import Search from "./Search";
import SignIn from "./SignIn";
import Logo from "./Logo";
import "../styles/components/Navbar.css";
import NavbarList from "./NavbarList";
function Navbar() {
  return (
    <div className="nav-container">
      <Container>
        <Row className="nav-container-row justify-content-md-center">
          <Col className="logo-col">
            <Logo img="https://duobul.net/src/images/duobul_logotext_rect_new.png" />
          </Col>
          <Col>
            <Search></Search>
          </Col>
          <Col className="right-col">
            <AddAdvert></AddAdvert>
            <SignIn></SignIn>
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

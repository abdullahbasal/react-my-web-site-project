import { Container, Row, Col } from "react-bootstrap";
import AddAdvert from "./AddAdvert";
import NavbarList from "./NavbarList";
import SignIn from "./SignIn";
import Logo from "./Logo";
import "../styles/components/Navbar.css";
function Navbar() {
  return (
    <Container className="nav-container">
      <Row className="nav-container-row">
        <Col md="3">
          <Logo img="https://duobul.net/src/images/duobul_logotext_rect_new.png" />
        </Col>
        <Col md="5">
          <NavbarList></NavbarList>
        </Col>
        <Col className="right-col" md="4">
          <AddAdvert></AddAdvert>
          <SignIn></SignIn>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;

import { Container, Row, Col } from "react-bootstrap";
import AddAdvert from "./AddAdvert";
import Search from "./Search";
import SignIn from "./SignIn";
import "../styles/components/Navbar.css";
function Navbar() {
  return (
    <>
      <Container className="nav-container">
        <Row>
          <Col>LOGO</Col>
          <Col>
            <Search></Search>
          </Col>
          <Col className="right-col">
            <AddAdvert></AddAdvert>
            <SignIn></SignIn>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navbar;

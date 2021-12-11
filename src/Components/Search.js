import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/Search.css";
function Search() {
  return (
    <Container>
      <Row>
        <Col>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;

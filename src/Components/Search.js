import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/Search.css";

function Search() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Ne Arıyordun? :)"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;

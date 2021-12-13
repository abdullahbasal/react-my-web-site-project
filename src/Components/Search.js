import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Search() {
  const element = <FontAwesomeIcon icon={faSearch} />;
  return (
    <Container>
      <Row>
        <Col>
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Ne Bakıyorsun? :)"
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

import React from "react";
import { Col, Card } from "react-bootstrap";
import "../styles/components/BlogPostCard.css";
import img1 from "../images/1.jpg";
export default function BlogPostCard() {
  return (
    <>
      <Col>
        {" "}
        <Card className="blog-post-card">
          <Card.Img className="blog-post-img" variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="blog-post-card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

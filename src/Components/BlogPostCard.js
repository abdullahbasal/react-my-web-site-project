import React from "react";
import { Col, Card } from "react-bootstrap";
import "../styles/components/BlogPostCard.css";
export default function BlogPostCard() {
  return (
    <>
      <Col>
        {" "}
        <Card className="blog-post-card">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

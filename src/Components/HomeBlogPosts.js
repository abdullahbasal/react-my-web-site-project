import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/HomeBlogPosts.css";
import BlogPostCard from "./BlogPostCard";
import MyButton from "./MyButton";
export default function HomeBlogPosts() {
  return (
    <>
      <Container className="home-blog-posts">
        <Row>
          <BlogPostCard></BlogPostCard>
        </Row>
        <Row>
          <Row>
            <Col className="blog-post-div">
              <MyButton
                title="Yazıların Hepsini Gör..."
                backgroundColorCode="yellow"
                colorCode="black"
              ></MyButton>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

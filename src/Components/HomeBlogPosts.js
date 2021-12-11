import React from "react";
import { Container } from "react-bootstrap";
import "../styles/components/HomeBlogPosts.css";
import BlogPostCard from "./BlogPostCard";
export default function HomeBlogPosts() {
  return (
    <>
      <Container>
        <BlogPostCard></BlogPostCard>
      </Container>
    </>
  );
}

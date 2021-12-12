import React from "react";
import { Col } from "react-bootstrap";
import "../styles/components/MyButton.css";
export default function MyButton(props) {
  return (
    <>
      <Col className="my-button-col">
        <button
          class="my-button"
          style={{
            background: `${props.backgroundColorCode}`,
            color: `${props.colorCode}`,
          }}
        >
          {props.title}
        </button>
      </Col>
    </>
  );
}

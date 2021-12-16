import React from "react";
import errorimg from "../images/404errorimg.png";
export default function ErrorComp() {
  return (
    <div style={{ textAlign: "center", margin: "50px 0px" }}>
      <img src={errorimg} />
    </div>
  );
}

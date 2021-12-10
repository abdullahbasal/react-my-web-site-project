import React from "react";
import "../styles/components/CategoryButton.css";
function CategoryButton(props) {
  return (
    <div className="category-button category-button-border">
      <div className="blob red"></div>
      <div className="btn-input">{props.title}</div>
    </div>
  );
}

export default CategoryButton;

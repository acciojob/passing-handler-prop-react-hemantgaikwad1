import React, { useState } from "react";
import "../styles/Child.css";

const Selection = ({ text, applyColor }) => {
  const [style, setStyle] = useState({ background: "" });

  const updateSelectionStyle = (nextBackground) => {
    setStyle({ background: nextBackground.background });
  };

  return (
    <div
      className="fix-box"
      style={{ background: style.background }}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">{text}</h2>
    </div>
  );
};

export default Selection;
import React, { useState } from 'react';
import '../styles/Child.css';

const Selection = ({ text, applyColor }) => {
  const [background, setBackground] = useState("");

  const updateSelectionStyle = (nextBackground) => {
    setBackground(nextBackground.background);
  };

  return (
    <div
      className="fix-box"
      style={{ background: background }}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">{text}</h2>
    </div>
  );
};

export default Selection;
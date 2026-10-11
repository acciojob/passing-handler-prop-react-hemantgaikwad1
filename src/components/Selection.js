import React, { useState } from 'react';
import '../styles/Child.css';

const Selection = (props) => {
  const [style, setStyle] = useState({ background: "" });

  const updateSelectionStyle = (nextBackground) => {
    setStyle(nextBackground);
  };

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => props.applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">{props.text ? props.text : "Selection"}</h2>
    </div>
  );
};

export default Selection;
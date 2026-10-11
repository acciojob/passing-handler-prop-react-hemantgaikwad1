
import React, { useState,useEffect } from 'react';
import '../styles/Child.css';


const Selection = ({ text, applyColor }) => {
const [nextBackground, updateSelectionStyle] = useState({ background: "" });
   
   
    // const colorChange = (e) => {
    //     applyColor(updateSelectionStyle);
    //     console.log(color);
    //     console.log(e.target);
    //    // e.target.style.background = color;
    // }
    return (
        <div className="fix-box" style={nextBackground}
      onClick={() => applyColor(updateSelectionStyle)}>
            <p className='subheading'>{text}</p>
        </div>
    )
}

export default Selection;
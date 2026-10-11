
import React, { useState,useEffect } from 'react';
import '../styles/Child.css';


const Selection = ({ text, applyColor }) => {
    const [color, setColor] = useState(null);
    function updateSelectionStyle(obj) {
        setColor(obj.background);
        
    }
   
    const colorChange = (e) => {
        applyColor(updateSelectionStyle);
        console.log(color);
        console.log(e.target);
       // e.target.style.background = color;
    }
    return (
        <div className="fix-box" style={{ backgroundColor: color }} onClick={colorChange}>
            <p className='subheading'>{text}</p>
        </div>
    )
}

export default Selection;
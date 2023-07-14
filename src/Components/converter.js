import React, { useState } from "react";
import "../App.css";
import hexToRgb from "hex-to-rgb";

const Converter = () => {
    let [color, setColor] = useState("rgb(255, 255, 255)");
    let [valid, setValid] = useState(true);

    const RegExp = /^#[0-9A-F]{6}$/i;

    function validateInput (e) {
        if (e.target.value.length == 7) {
            if (RegExp.test(e.target.value)) {
                const rgbValue = `rgb(${hexToRgb(e.target.value)})`;
                setColor(rgbValue);
                color = rgbValue;
                setValid(true);
                valid = true;
            } else {
                setValid(false);
                valid = false;
                setColor("rgb(255, 0, 0)");
                color = "rgb(255, 0, 0)";
            }
        }
    }

    return (
        <form style={{backgroundColor: `${color}`}}>
            <input name='background' onChange={validateInput}/>
            <div className="output" style={{backgroundColor: `${color}`}}> {valid ? color : 'error'} </div>
        </form>
    );
};

export default Converter;
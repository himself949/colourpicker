import React, { useState } from 'react';
import './Random.css'

const RandomPick = () => {

    const [currentColour, setCurrentColour] = useState([50, 50, 150])

    function rgbFormat(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    function handleClick() {
        let newColour = []
        for (let i = 0; i < 3; i++) {
            let newRGB = Math.floor(Math.random() * 256)
            newColour.push(newRGB)
        }
        setCurrentColour(newColour)
    }

    function isLight() {
        return currentColour.reduce((a, b) => a + b) < 127 * 3;
    }

    return (
        <div style={{ backgroundColor: rgbFormat(currentColour) }} className="random-background">
            <h1 className={isLight() ? "white" : "black"}>Your colour is {rgbFormat(currentColour)}</h1>
            <button onClick={handleClick} className={isLight() ? "light-button" : "dark-button"}>Refresh</button>
        </div>
    );
};

export default RandomPick;
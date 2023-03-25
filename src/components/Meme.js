import Data from "../Data/memesData"
import React from "react";
import { useState } from "react"

export default function Meme() {
    

    const [bottomText, setBottomText] = React.useState("");
    const [topText, setTopText] = React.useState("");
    

    const [URL, setURL] = React.useState("");

    function handleButtonClick() {
        const memesArray = Data.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setURL(randomNumber);
    }

    function handleTopTextChange(e) {
        setTopText(e.target.value)
    }
    
    function handleBottomTextChange(e) {
        setBottomText(e.target.value)
    }


    return (
        <div className="main">
            <form action="">
                <input type="text" placeholder="Enter the top text" id="top-text" value={topText} onChange={handleTopTextChange}/>
                <input type="text" placeholder="Enter the bottom text" id="bottom-text" value={bottomText} onChange={handleBottomTextChange} />
            </form>
            <button onClick={handleButtonClick}>GENERATE RANDOM IMAGE 🖼</button>

            <div className="meme">
                <h1 id="img-top-text" className="top">{topText}</h1>
                <img src={URL ? Data.data.memes[URL].url : ""} alt="" />
                <h1 id="img-bottom-text" className="bottom">{bottomText}</h1>
            </div>
        </div>
    )
}
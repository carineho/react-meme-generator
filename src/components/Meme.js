import React from "react";
import "./Meme.css";
import memesData from "../memesData";

export default function Meme() {

    const [img, setImg] = React.useState("")

    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        setImg(memeArray[randomNumber].url);
    }

    return (
        <main>
            <div className="form">
                <div>
                    <label>Top Text
                        <input
                            type="text"
                            className="form--input"
                        />
                    </label>
                </div>
                <div>
                    <label>Bottom Text
                        <input
                            type="text"
                            className="form--input"
                        />
                    </label>
                </div>
                <button className="form--button" onClick={getMemeImage}>
                    Generate meme image!
                </button>
            </div>
            <img src={img} className="meme--image" />
        </main>
    )
}
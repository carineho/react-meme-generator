import React from "react";
import "./Meme.css";
import memesData from "../memesData";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        img: "http://i.imgflip.com/1bij.jpg",
    })

    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                img: url
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        // update topText and bottomText
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    }

    return (
        <main>
            <div className="form">
                <div>
                    <label>Top Text
                        <input
                            type="text"
                            name="topText"
                            className="form--input"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Bottom Text
                        <input
                            type="text"
                            name="bottomText"
                            className="form--input"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button className="form--button" onClick={getMemeImage}>
                    Generate meme image!
                </button>
            </div>
            <div className="meme">
                <img src={meme.img} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
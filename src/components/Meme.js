import React from "react";
import "./Meme.css";

export default function Meme() {
    return (
        <main>
            <form className="form">
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
                <button className="form--button">
                    Generate meme image!
                </button>
            </form>
        </main>
    )
}
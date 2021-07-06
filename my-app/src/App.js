import React from "react";
import "./App.css";
import Header from "./Header.js";
import Typing from "./Typing.js";

const App = () => {
    return (
        <div>
            <h1>Typing Game</h1>
            <p>
                Practice your typing skills with a quote from Sherlock Holmes.
                Click *Start* to begin.
            </p>
            <p id="quote"></p>
            <p id="message"></p>
            <div>
                <input type="text" aria-label="current word" id="typed-value" />
                <button type="button" id="start">
                    Start
                </button>
            </div>
        </div>
    );
};

export default App;

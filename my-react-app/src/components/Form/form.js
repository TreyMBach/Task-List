import React from "react";
import "./form.css";

export default function Form() {
    return (
        <div className="formContainer">
            <h1 id='formText'>List:</h1>
            {/* Input to be able to add to the task list. */}
            <div id="listContainer">
                <input 
                type="text" 
                id="inputText" 
                placeholder="Add a task..." 
                />
                <button id="addButton">✅</button>
                <button id="clearButton">❌</button>
            </div>

        </div>
    );
}
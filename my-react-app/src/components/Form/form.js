import React, { useState }  from "react";
import "./form.css";

export default function Form() {
    // This is the state of the input text.
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    // This is the function that sets the input text.
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputText(value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(inputText);
        
        
        // Using a terinary operator to check if the input text is empty.
        // If so then alert the user to enter a todo.
        // If not then add the todo to the list.
        // inputText.trim() !== "" ? setTodos([...todos, inputText]) : alert("Please enter a todo!");


        // Attempted to add opacity fade in to the todo item that is inputed. Currently bugged and not working WIP

        if (inputText.trim() !== "") {
            setTodos([...todos, inputText]);
            setInputText("");

            // setTimeout action to be able to fade in the todo item that is inputed.
            setTimeout(() => {
                const listItems = document.querySelectorAll(".list-item");
                listItems[listItems.length - 1].style.opacity = 1;
            }, 10);
        } else {
            alert("Please enter a todo!");
        }
    }

    const handleDelete = (index) => {
        console.log("Delete button clicked!");
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }

    // Commenting out the edit function for now. WIP
    // const handleEdit = (index) => {
    //     console.log("Edit button clicked!");
    //     const updatedTodos = todos.filter((_, i) => i !== index);
    //     setTodos(updatedTodos);
    // }




    return (
        <div className="formContainer">
            {/* Input to be able to add to the task list. */}
            <div id="listContainer">
                <form>
                    <input 
                    type="text" 
                    value={inputText}
                    onChange={handleInputChange}
                    id="inputText" 
                    placeholder="Add a todo" 
                    />
                    <button id="addButton" onClick={handleFormSubmit}>Add</button>
                </form>
                {/* List to Display */}
                <ul id="list">
                    {todos.map((todo, index) => (
                        <ul id="buttonList" className="list-item" key={index}>
                            <p id="todoItem">{todo}</p>
                            <button id="deleteButton" onClick={() => handleDelete(index)}>Delete</button>
                            {/* Commenting out the handle button for now WIP. */}
                            {/* <button onClick={() => handleEdit(index)}>Edit</button> */}
                        </ul>
                    ))}
                </ul>
            </div>
        </div>
    );
} 
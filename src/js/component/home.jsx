import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const ToDoList = () => {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="container">
      <h1>
        <input type="text" placeholder="Add List Tittle" />
      </h1>
      <ul>
        <li>
          <input type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="Add an element"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <FontAwesomeIcon className="icon" icon={faX}
              onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}
            />
          </li>
        ))}
      </ul>
      <div className="tasks pt-2"><b>{todos.length} Items</b></div>
    </div>
  );
};

export default ToDoList;


import React from "react";
import AddTodo from "./addTodo.js";
import TodoList from "./todoList.js";

// import './style.css';

export default () => {

    return (
        <header className="header">
            <h1>todos</h1>
            <AddTodo
                newTodo
                placeholder="What needs to be done?"
            />
            <TodoList/>
        </header>
    )
}
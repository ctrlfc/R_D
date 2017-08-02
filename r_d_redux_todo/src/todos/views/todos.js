import React from "react";
import { ADD_TODO } from "./addTodo.js";
import { TodoList } from "./toodList.js";

import './style.css';

export default () => {
    return (
        <div className="todos">
            <AddTodo />
            <TodoList />            
        </div>
    )
}
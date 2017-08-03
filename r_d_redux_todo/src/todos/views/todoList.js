import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem.js';
import { toggleTodo, removeTodo } from '../action.js';
import { FileterTypes } from '../../constants.js';

cosnt TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul className="todo-list">
            {
                todo.map(item)=>(
            <TodoItem
                key={item.text}    
                )
            }
        </ul>
    )
}
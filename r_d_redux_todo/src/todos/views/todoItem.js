/*
 * @Author: king 
 * @Date: 2017-08-04 00:46:35 
 * @Last Modified by: king
 * @Last Modified time: 2017-08-04 01:11:20
 */

import React, { PropTypes } from "react";

const TodoItem = ({ onToggle, onRemve, completed, text }) => {
  const checkedProp = completed ? { checked: true } : {};
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      <input
        className="toggle"
        type="checked"
        {...checkedProp}
        readOnly
        onClick={onToggle}
      />
      <label className="text">
        {text}
      </label>
      <button className="remove" onClick={onRemve}>
        x
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemve: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;
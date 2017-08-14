import React from "react";
import Link from "./link";
import {FilterTypes} from "../../constants/constants.js";

// import "./style.css";


/*const renderTodoCount = () => {
    const {activeCount} = this.props;
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
        <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
    );
};*/

/*const renderClearButton = () => {
    const {completedCount, onClearCompleted} = this.props;
    if (completedCount > 0) {
        return (
            <button className="clear-completed" onClick={onClearCompleted}>
                Clear completed
            </button>
        );
    }
};*/

const Filters = () => {
    return (
        <footer className="footer">
            {/*{renderTodoCount()}*/}
            <ul className="filters">
                <li>
                    <Link filter={FilterTypes.ALL}>
                        {FilterTypes.ALL}
                    </Link>
                </li>
                <li>
                    <Link filter={FilterTypes.COMPLETED}>
                        {FilterTypes.COMPLETED}
                    </Link>
                </li>
                <li>
                    <Link filter={FilterTypes.UNCOMPLETED}>
                        {FilterTypes.UNCOMPLETED}
                    </Link>
                </li>
            </ul>
            {/*{renderClearButton()}*/}
        </footer>
    );
};

export default Filters;
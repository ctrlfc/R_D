import React from "react";
import Link from "./link";
import {FilterTypes} from "../../constants.js";

// import "./style.css";

const Filters = () => {
    return (
        <footer className="footer">
            <p className="filters">
                <Link filter={FilterTypes.ALL}>
                    {FilterTypes.ALL}
                </Link>
                <Link filter={FilterTypes.COMPLETED}>
                    {FilterTypes.COMPLETED}
                </Link>
                <Link filter={FilterTypes.UNCOMPLETED}>
                    {FilterTypes.UNCOMPLETED}
                </Link>
            </p>
        </footer>
    );
};

export default Filters;
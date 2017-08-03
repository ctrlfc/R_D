/*
 * @Author: king 
 * @Date: 2017-08-04 01:47:06 
 * @Last Modified by: king
 * @Last Modified time: 2017-08-04 01:55:50
 */

import React from "react";
import Link from "./link";
import { FilterTypes } from "../../constants";

import "./style.css";

const Filter = () => {
  return (
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
  );
};

export default Filters;
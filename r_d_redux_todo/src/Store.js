//多个reducer组合
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { reducer as todoReducer } from "./todos/";
import { reducer as filterReducer } from "./filter/";

import Perf from "react-addons-perf";

//一般不会去改变全局变量名,所以赋值给一个变量,最后只剩一个全局变量
const win = window;
//配和perf插件进行性能测试
win.Perf = Perf;

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== "prpduction") {
  middlewares.push(require("redux-immutable-state-invariant")());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  win && win.devToolsExtension ? win.devToolsExtension() : f => f
);

export default createStore(reducer, {}, storeEnhancers);

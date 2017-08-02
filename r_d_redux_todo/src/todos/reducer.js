import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      //对所有可能出现大的action.type
      //返回一个增加了对象的数组
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ];
    }
    case TOGGLE_TODO: {
      return state.map(todoItem => {
        if (todoItem.id === action.id) {
          return { ...todoItem, completed: !todoItem.completed };
        } else {
          return todoItem;
        }
      });
    }
    case REMOVE_TODO: {
        //过滤掉选择的ID  
      return state.filter(todoItem => {
        return todoItem.id !== action.id;
      });
    }
    default: {
      return state;
    }
  }
};

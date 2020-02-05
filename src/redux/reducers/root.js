import { ADD_TO_LIST, REMOVE_FROM_LIST } from '../constants/actionTypes';
import newId from '../idGenerator';

const ToDoList = [];

const rootReducer = (state = ToDoList, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return [...state, { key: newId(), todos: action.item }];
        case REMOVE_FROM_LIST:
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            return state;
    };
}
export default rootReducer;
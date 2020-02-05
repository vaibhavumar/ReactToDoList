import { ADD_TO_LIST, PUT_TO_COMPLECTED } from '../constants/actionTypes';
import newId from '../idGenerator';

const ToDoList = [];

const rootReducer = (state = ToDoList, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return [...state, { key: newId(), todos: action.item , checked: false}];
        case PUT_TO_COMPLECTED:
            return state.map((item) => {
                if(item.key === action.key){
                    item.checked = true;
                    return item;
                }
                return item;
            });
        default:
            return state;
    };
}
export default rootReducer;
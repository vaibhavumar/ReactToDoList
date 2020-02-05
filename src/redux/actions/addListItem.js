import {ADD_TO_LIST} from '../constants/actionTypes';

const addToList = (item) => {
    return {
        type: ADD_TO_LIST,
        item,
    };
};

export default addToList;
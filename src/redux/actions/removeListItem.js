import {REMOVE_FROM_LIST} from '../constants/actionTypes';

const removeFromList = (index) => {
    return {
        type: REMOVE_FROM_LIST,
        index
    };
};

export default removeFromList;
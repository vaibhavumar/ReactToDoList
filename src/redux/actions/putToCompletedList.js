import {PUT_TO_COMPLECTED} from '../constants/actionTypes';

const putInCompletedList = (key) => {
    return {
        type: PUT_TO_COMPLECTED,
        key
    };
};

export default putInCompletedList;
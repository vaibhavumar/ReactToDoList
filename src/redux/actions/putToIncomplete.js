import {PUT_TO_INCOMPLETE} from '../constants/actionTypes';

const putToIncomplete = (key) => {
    return {
        type: PUT_TO_INCOMPLETE,
        key
    };
};

export default putToIncomplete;
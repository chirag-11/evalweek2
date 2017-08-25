import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    error:""
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_FAIL:
            return Object.assign({},...state,{error:action.error});
        case actionTypes.SAVE_DATA_FAIL:
            return Object.assign({},...state,{error:action.error});
        default:
            return state;

    }
};


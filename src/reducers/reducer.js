import * as actionTypes from "../constants/actionTypes.js";
const initialState = {
    country: []
};

export  const baseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, ...state, { country: action.country });
       case actionTypes.SAVE_DATA_SUCCESS:
       return Object.assign({}, ...state, {country:action.country});
        default:
            return state;
    }
};


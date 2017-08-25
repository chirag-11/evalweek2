import * as actionTypes from "../constants/actionTypes.js";
const initialState = {
    filterData: ""
};

export const searchReducer =(state=initialState,action) => {
    switch(action.type){
        case actionTypes.SEARCH_DATA:
        return Object.assign({},...state,{filterData:action.filterData});
        default :
        return state;
    }
};




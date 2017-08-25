import {
    searchReducer
} from '../reducers/searchReducer.js';
import * as types from '../constants/actionTypes.js';

describe('should handle searchReducer ', () => {
    it('should handle initial state', () => {
        expect(searchReducer(undefined, {})).toEqual({
            filterData: ""
        });
    });
    it('should handle search data', () => {
        const state = {
            filterData: ""
        };
        const action = {
            type: types.SEARCH_DATA,
            filterData: ""
        };
        expect(
            searchReducer(state, action)
        ).toEqual(
            Object.assign({}, ...state, {
                filterData: action.filterData
            })
        );
    });


});
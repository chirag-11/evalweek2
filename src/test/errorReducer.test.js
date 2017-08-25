import {
    errorReducer
} from '../reducers/errorReducer.js';
import * as types from '../constants/actionTypes.js';
import * as actions from '../actions/actions.js';


describe('errorReducer', () => {
    it('should return initial state', () => {
        expect(errorReducer(undefined, {})).toEqual({
            error: ""
        });
    });
    it('should handle get data failure', () => {
        const state = {};
        const action = {
            type: types.GET_DATA_FAIL,
            error: ""
        };
    });

    it('handle save data failure', () => {
        const state = {};
        const action = {
            type: types.SAVE_DATA_FAIL,
            error: ""
        };
        expect(
            errorReducer(state, action)
        ).toEqual(Object.assign({}, ...state, {
            error: action.error
        }));
    });
});
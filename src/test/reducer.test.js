import {
    baseReducer
} from '../reducers/reducer.js';
import * as types from '../constants/actionTypes.js';
import * as actions from '../actions/actions.js';


describe('test reducer', () => {
    it('should return the initial state', () => {
        expect(baseReducer(undefined, {})).toEqual({
            country: []
        });
    });
    it('handle get data success', () => {
        const state = {
            country: []
        };
        const action = {
            type: types.GET_DATA_SUCCESS,
            country: [{
                "id": "1",
                "name": "Bangladesh",
                "capital": "Dhaka",
                "imageUrl": "http://localhost:3000/bangladesh.jpg"
            }]
        };
        expect(baseReducer(state, action)).toEqual(
            Object.assign({}, ...state, {
                country: action.country
            })
        );
    });
    it('handle Save data success', () => {
        const state = {
            country: [{
                "id": "1",
                "name": "Bangladesh",
                "capital": "Dhaka",
                "imageUrl": "http://localhost:3000/bangladesh.jpg"
            }]
        };
        const action = {
            type: types.SAVE_DATA_SUCCESS,
            countrty: [{
                "id": "1",
                "name": "Bangladesh",
                "capital": "Dhaka",
                "imageUrl": "http://localhost:3000/bangladesh.jpg"
            }]
        };
        expect(baseReducer(state, action)).toEqual(
            Object.assign({}, ...state, {
                country: action.country
            })
        );
    });
});
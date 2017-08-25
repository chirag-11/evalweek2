import * as actions from '../actions/actions.js';
import * as types from '../constants/actionTypes.js';

describe('actions', () => {
    let err = {
        message: "handle error"
    };
    it('should create an action to get data', () => {
        const expectedAction = {
            type: types.GET_DATA,

        };
        expect(actions.getData()).toEqual(expectedAction);
    });

    it('it should create an action to save data', () => {

        const expectedAction = {
            type: types.SAVE_DATA,

        };
        expect(actions.saveData()).toEqual(expectedAction);
    });
    it('it should handle get data success', () => {
        const expectedAction = {
            type: types.GET_DATA_SUCCESS
        };
        expect(actions.getDataSuccess()).toEqual(expectedAction);
    });

    it('it should handle  save data success', () => {
        const expectedAction = {
            type: types.SAVE_DATA_SUCCESS
        };
        expect(actions.saveDataSuccess()).toEqual(expectedAction);
    });

    it('it should handle save data failed', () => {
        const expectedAction = {
            type: types.SAVE_DATA_FAIL,
            error: err.message + "save data api failed"
        };
        expect(actions.saveDataFail(err)).toEqual(expectedAction);
    });

    it('it should handle get data fail', () => {
        const expectedAction = {
            type: types.GET_DATA_FAIL,
            error: err.message + "get data api failed"
        };
        expect(actions.getDataFail(err)).toEqual(expectedAction);
    });
});
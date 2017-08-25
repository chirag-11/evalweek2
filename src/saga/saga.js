import React from "react";
import * as actions from "../actions/actions.js";
import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../constants/actionTypes.js";
import {getData,postData} from "../api/api.js";

export function* getsaga() {
   try{ 
       let country = yield call(getData);
       yield put(actions.getDataSuccess(country));
       }
catch(err){
    yield put(actions.getDataFail(err));
}
}
export function* watchSaga() {
    yield takeEvery(actionTypes.GET_DATA, getsaga);
}

export function* saveSaga(action) {
    try {
        let country = yield call(postData, action.current);
        yield put(actions.saveDataSuccess(country));
        }
    catch (err) {
        yield put(actions.saveDataFail(err));
    }

}
export function* watchPostSaga() {
    yield takeEvery(actionTypes.SAVE_DATA, saveSaga);
}
export default function* rootSaga() {
    yield all([watchSaga(), watchPostSaga()]);
}


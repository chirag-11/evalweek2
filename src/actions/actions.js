import * as types from "../constants/actionTypes.js";

export function getData()
{

    return {
        type:types.GET_DATA
    };
} 

export function saveData(curr)
{
    return {
        type:types.SAVE_DATA,
        current:curr
    };
}

export function getDataSuccess(country)
{
    return {
        type:types.GET_DATA_SUCCESS,
        country:country
    };
}

export function getDataFail(err)
{
    return {
        type:types.GET_DATA_FAIL,
        error:err.message+"get data api failed"
    };
}

export function saveDataSuccess(country)
{
    return{
        type:types.SAVE_DATA_SUCCESS,
        country:country
    };
}

export function saveDataFail(err)
{
   return {
        type:types.SAVE_DATA_FAIL,
        error:err.message +"save data api failed"
    };
}

export function getFilteredData (filterData)
{
    return {
        type:types.SEARCH_DATA,
        filterData:filterData
    };
}
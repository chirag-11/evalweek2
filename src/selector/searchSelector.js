import {createSelector} from 'reselect';

const getFilterData=(state)=>state.search.filterData;
const getAllData=(state)=>state.state.country;

export const filterCountry=createSelector(
    [getFilterData,getAllData],
    (filterData,country)=>country.filter(item=>item.name.toLowerCase().includes(filterData.toLowerCase()))
    );
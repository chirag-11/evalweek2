import React from 'react';
import Search from '../components/search.js';
import * as stateActions from "../actions/actions.js";
import { connect } from 'react-redux';
import {filterCountry} from "../selector/searchSelector.js";

const mapStateToProps = state => {
    let data = {
        country: state.state.country,
        filteredData:filterCountry(state)    
    };
    return data;
};
const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(stateActions.getData()),
    getFilteredData:(toSearch)=>dispatch(stateActions.getFilteredData(toSearch))
});
export default connect(mapStateToProps,mapDispatchToProps)(Search); 
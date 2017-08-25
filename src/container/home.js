import React from 'react';
import Home from '../components/home.js';
import * as stateActions from "../actions/actions.js";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    let data = {
        country: state.state.country
    };
    return data;
};

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(stateActions.getData())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
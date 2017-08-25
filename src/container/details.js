import React from 'react';
import Details from '../components/common/details.js';
import * as stateActions from "../actions/actions.js";
import { connect } from 'react-redux';

const mapStateToProps = (state,props) => {
    let data = {
        country: state.state.country,
        id:props.match.params.id
    };
    return data;
};

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(stateActions.getData()),
    saveData: (curr) => dispatch(stateActions.saveData(curr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
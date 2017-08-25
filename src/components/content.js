import React from "react";
import PropTypes from "prop-types";
import { Route } from 'react-router-dom';
import HomeContainer from '../container/home.js';
import DetailsContainer from '../container/details.js';
import SearchContainer from '../container/search.js';


export default class Content extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/search" component={SearchContainer} />
                <Route exact path="/details/:id" component={DetailsContainer} />
            </div>
        );
    }
}

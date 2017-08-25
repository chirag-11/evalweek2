import React from "react";
import ReactDOM from "react-dom";
import Header from './components/common/header.js';
import Content from './components/content.js';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style/style.css";
import Footer from './components/common/footer.js';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from "redux";
import { baseReducer } from "./reducers/reducer.js";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/saga.js";
import { searchReducer } from "./reducers/searchReducer.js";
import {errorReducer} from './reducers/errorReducer.js';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
        state: baseReducer,
        error:errorReducer,
        search:searchReducer
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
        <div id="app">
                <Provider store={store}>
                        <Router>
                                <div>
                                        <Header />
                                        <Content />
                                        <Footer />
                                </div>
                        </Router>
                </Provider>
        </div>
        , document.getElementById('container')
);

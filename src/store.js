import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import * as actionCreators from './actions/actionCreators.js';
import * as auth from './auth.js';
// import the root reducer
import rootReducer from './reducers';


// create an object for the default data
const initialState = {
    tasks: [],
    tasklists: [],
    userProfile: {},
    accessToken: {},
    projects: [],
    project: {}
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(promiseMiddleware, logger());

export const store = createStore(rootReducer, initialState, composeEnhancers(
    middleware
));

export const history = syncHistoryWithStore(browserHistory, store);

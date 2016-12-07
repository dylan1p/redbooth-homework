import { createStore, compse, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import * as actionCreators from './actions/actionCreators.js';
// import the root reducer
import rootReducer from './reducers';

// create an object for the default data
const initialState = {
  tasks: []
};

const middleware = applyMiddleware(promiseMiddleware, logger());

export const store = createStore(rootReducer, initialState, middleware);

export const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actionCreators.getTasks());

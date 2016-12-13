import React from 'react';
import { render } from 'react-dom';
import scss from '../kanban.scss';
import App from './components/App';
import TaskBoard from './components/TaskBoard';
import * as actionCreators from './actions/actionCreators';

//import react router dep
import { Router, Route, IndexRoute } from 'react-router';

//allows redux to be used with react;
import { Provider } from 'react-redux';

import { store, history } from './store';

store.dispatch(actionCreators.authenticateUser()).then(()=>{
  const router = (
      <Provider store={store}>
      <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={TaskBoard}></IndexRoute>
      </Route>
      </Router>
      </Provider>
  );
  render(router, document.getElementById('root'));
});


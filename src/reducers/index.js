import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import tasklists from './tasklists';
import userProfile from './userProfile';
import token from './token';

const rootReducer = combineReducers({
  tasks,
  tasklists,
  routing: routerReducer,
  userProfile,
  token
});

export default rootReducer;

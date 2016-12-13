import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import tasklists from './tasklists';
import userProfile from './userProfile';
import projects from './projects';
import accessToken from './accessToken';

const rootReducer = combineReducers({
  tasks,
  accessToken,
  tasklists,
  routing: routerReducer,
  userProfile,
  projects
});

export default rootReducer;

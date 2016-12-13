import { createAction } from 'redux-actions';
import axios from 'axios';
import * as auth from '../auth';
import tasks from '../data/tasks';
import tasklists from '../data/tasklist';


export const authenticateUser = createAction('AUTHENTICATE_USER', async () =>{
  return await auth.authenticateUser();
});



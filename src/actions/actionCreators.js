import { createAction } from 'redux-actions';
import axios from 'axios';
import * as auth from '../auth';
import tasks from '../data/tasks';
import tasklists from '../data/tasklist';

export const authenticateUser = createAction('AUTHENTICATE_USER', async () =>{
  const res = await auth.authenticateUser();
  return res.accessToken;
});

export const getTasks = createAction('GET_TASKS', async () =>{
  return tasks;
});

export const getTasklists = createAction('GET_TASKLISTS', async () =>{
  return tasklists;
});



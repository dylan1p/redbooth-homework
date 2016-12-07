import { createAction } from 'redux-actions';
import axios from 'axios';
import tasks from '../data/tasks';

export const getTasks = createAction('GET_TASKS', async () =>{
  const results = await axios.get('http://rest.learncode.academy/api/wstern/users');
  return tasks;
});

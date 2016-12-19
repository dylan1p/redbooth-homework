import { createAction } from 'redux-actions';
import axios from 'axios';
import * as auth from '../auth';
import { store } from '../store';

export const authenticateUser = createAction(
  'AUTHENTICATE_USER',  () => auth.authenticateUser()
);

export const changeTaskStatus = createAction(
  'CHANGE_TASK_STATUS', (task_id, task_list_id) =>{
    return axios.post(`/api/3/tasks/${task_id}/sort/?access_token=${store.getState().accessToken}`, {
      task_list_id
    }).then(res => res.data);
  });

export const createTask = createAction(
  'CREATE_TASK', (task_list_id, project_id, name)=>{
    return axios.post(`/api/3/tasks/?access_token=${store.getState().accessToken}`,{
      position: 0,
      task_list_id,
      project_id,
      name
    }).then(res => res.data);
  });



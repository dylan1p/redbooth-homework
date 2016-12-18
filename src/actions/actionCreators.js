import { createAction } from 'redux-actions';
import axios from 'axios';
import * as auth from '../auth';
import { store } from '../store';

export const authenticateUser = createAction('AUTHENTICATE_USER', async () =>{
  return await auth.authenticateUser();
});

export const changeTaskStatus = createAction('CHANGE_TASK_STATUS', async (taskId, taskListId) =>{  
  return axios.post(`/api/3/tasks/${taskId}/sort/?access_token=${store.getState().accessToken}`, {
      task_list_id: taskListId
    }).then(res => {return res.data;});
});

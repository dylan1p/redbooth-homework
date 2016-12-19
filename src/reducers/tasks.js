import update from 'react-addons-update';
import { handleAction, handleActions } from 'redux-actions';

const reducer = handleActions({
  'AUTHENTICATE_USER': (state, action) => (action.payload.tasks),
  'CHANGE_TASK_STATUS': (state, action) => {
    return state.map(task => {
      if(task.id === action.payload.id) return action.payload;
      else return task;
    });
  },
  'CREATE_TASK': (state, action)=> (
    [action.payload, ...state]
  )
}, {});


export default reducer;

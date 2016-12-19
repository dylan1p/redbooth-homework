import { handleAction } from 'redux-actions';

const tasksLists = handleAction(
  'AUTHENTICATE_USER', {
    next (state, action){
      return action.payload.tasklists;
    },
    throw (state, action){
      return {error: true, message: action.payload};
    }
  },
  {});

export default tasksLists;

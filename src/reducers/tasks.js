import { handleAction } from 'redux-actions';

let tasks = handleAction('AUTHENTICATE_USER', {
  next (state, action){
    return action.payload.tasks;
  },
  throw (state, action){
    return {error: true, message: 'something went wrong'};
  }
}, {});

export default tasks;

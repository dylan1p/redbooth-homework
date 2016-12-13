import { handleAction } from 'redux-actions';

let taskslists = handleAction('AUTHENTICATE_USER', {
  next (state, action){
    return action.payload.tasklists;
  },
  throw (state, action){
    return {error: true, message: 'something went wrong'};
  }
}, {});

export default taskslists;

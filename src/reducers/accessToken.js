import { handleAction } from 'redux-actions';

let accessToken = handleAction('AUTHENTICATE_USER', {
  next (state, action){
    return action.payload.accessToken;
  },
  throw (state, action){
    return {error: true, message: action.payload };
  }
}, {});

export default accessToken;


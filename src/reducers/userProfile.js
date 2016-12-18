import { handleAction } from 'redux-actions';

let userProfile = handleAction('AUTHENTICATE_USER', {
  next (state, action){
    return action.payload.userProfile;
  },
  throw (state, action){
    return {error: true,  message: action.payload };
  }
}, {});

export default userProfile;

import { handleAction } from 'redux-actions';

let Project = handleAction('AUTHENTICATE_USER', {
  next (state, action){
    return action.payload.project;
  },
  throw (state, action){
    return {error: true, message: action.payload };
  }
}, {});

export default Project;

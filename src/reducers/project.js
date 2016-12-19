import { handleAction } from 'redux-actions';

let Projects = handleAction('AUTHENTICATE_USER', {
  next (state, action){
    return action.payload.projects;
  },
  throw (state, action){
    return {error: true, message: action.payload };
  }
}, {});

export default Projects;

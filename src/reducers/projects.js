function projects(state = [], action){
  switch (action.type) {
  case "GET_PROJECTS":{
    return action.payload.data;
    break;
  }
  }
  return state;
}

export default projects;

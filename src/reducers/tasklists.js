function tasklists(state = [], action){
  switch (action.type) {
  case "GET_TASKLISTS":{
    return action.payload;
    break;
  }
  }
  return state;
}

export default tasklists;

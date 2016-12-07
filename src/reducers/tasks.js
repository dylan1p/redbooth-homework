function tasks(state = [], action){
  console.log(action);
  switch (action.type) {
  case "GET_TASKS":{
    console.log('herererererekerekkr');
    return action.payload;
    break;
  }
  }
  return state;
}

export default tasks;

function token(state = [], action){
  switch (action.type) {
  case "AUTHENTICATE_USER":{
    console.log(action);
    return action.payload;
    break;
  }
  }
  return state;
}

export default token;

function userProfile(state = [], action){
  switch (action.type) {
  case "GET_PROFILE":{
    return action.payload;
    break;
  }
  }
  return state;
}

export default userProfile;

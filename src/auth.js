import axios from 'axios';
import { store } from './store';

const client_id = '611edd94df36508f05f5e4425a0e80224a3387d1cba08efa48d4689589ebf3e1';
const client_secret = 'dc990596994c6a97bf72fd85816f1e375e7efb6d345d7ffb68a72a9f3c5f2cce';
const redirect_uri = 'http://localhost:9000';
const code = getParameterByName('code');
const grant_type = 'authorization_code';

let accessToken = localStorage.getItem("accessToken");

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

if(!accessToken && !code)
  window.location.href =`https://redbooth.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

let data = {
  client_id,
  client_secret,
  redirect_uri,
  code,
  grant_type
};


let raw = Object.keys(data).map(key=>{
  return `${key}=${encodeURIComponent(data[key])}`;
}).join('&');

export const authenticateUser = async () =>{
  if(!accessToken){
    const token = await axios.post(
      'oauth2/token',
      raw, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    accessToken = token.data.access_token;
    localStorage.setItem("accessToken", accessToken);
  }

  const userProfile = await axios.get(`api/3/me?access_token=${accessToken}`);

  const projects = await axios.get(`/api/3/projects?access_token=${accessToken}`);

  const tasks = await axios.get(`/api/3/tasks?project_id=${projects.data[0].id}&access_token=${accessToken}`);

  const taskLists = await axios.get(`/api/3/task_lists?project_id=${projects.data[0].id}&access_token=${accessToken}`);

  return {
    accessToken,
    userProfile : userProfile.data,
    project: projects.data[0],
    tasks : tasks.data,
    tasklists: taskLists.data.reverse()
  };
};


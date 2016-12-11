import axios from 'axios';

const client_id = '611edd94df36508f05f5e4425a0e80224a3387d1cba08efa48d4689589ebf3e1';
const client_secret = 'dc990596994c6a97bf72fd85816f1e375e7efb6d345d7ffb68a72a9f3c5f2cce';
const redirect_uri = 'http://localhost:9000';
const code = getParameterByName('code');
const grant_type = 'authorization_code';

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

if(!code)
  window.location.href =`https://redbooth.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

let data = {
  client_id,
  client_secret,
  redirect_uri,
  code,
  grant_type
};


let raw = Object.keys(data).map(key=>{
  // todo encode value as url
  return `${key}=${encodeURIComponent(data[key])}`;
}).join('&');

export const authenticateUser = async () =>{
  const token = await axios.post(
    'oauth2/token',
    raw,
   { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );

  const accessToken = token.data.access_token;

  const userProfile = await axios.get(`api/3/me?access_token=${accessToken}`);

  return { userProfile : userProfile.data,
           accessToken
         };
};


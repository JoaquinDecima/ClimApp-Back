import axios from 'axios';

const server = 'http://ip-api.com/json/';

export const IPAPI = {
  get: path => axios.get(`${server}${path}`)
                    .then(response => response.data)
};

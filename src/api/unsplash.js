import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 47fa4b57ad4d13027be512cfd1ba58530171908f3c7e0c108f7b7ecb43d46cc6'
  }
});

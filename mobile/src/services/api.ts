import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com',
});

export default api;

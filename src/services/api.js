import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/',
});

export default api;

import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/',
  timeout: 10000,
});

export type methodType =
  | 'GET';

interface Params {
  headers?: {
    [val: string]: any;
  };
  endpoint: string;
  method?: methodType;
  token?: string;
  params?: object;
  data?: object;
  showJSON?: boolean;
  showConsoleLog?: boolean;
  title?: string;
}

const callBaseApi = (call: Params) => {
  const {
    endpoint,
    method = 'GET',
    token = '',
    params = {},
    data = {},
    showConsoleLog = true,
    title = '',
  } = call;
  // Config Headers
  const defaultHeaders = {
    'Client-Device': 'app',
    'Content-Type': 'application/json',
    'Accept-Language': 'pt-BR',
  };

  const headers: any = { ...call.headers, ...defaultHeaders };

  if (token) headers.Authorization = `Bearer ${token}`;

  // Helpers for Debug
  if (showConsoleLog && __DEV__) {
    console.tron.log(`[${title} - CALL API COMPLETE]`, {
      headers,
      method,
      endpoint,
      params,
      data,
    });
  }

  baseApi.interceptors.response.use(
    (response) => {
      if (showConsoleLog && __DEV__) {
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  if (method === 'GET') {
    return baseApi(endpoint, {
      params: { ...params },
      headers,
      method,
    });
  }

  return baseApi(endpoint, {
    headers,
    method,
    data,
  });
};

export default callBaseApi;

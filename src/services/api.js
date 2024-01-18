import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api',
});

api.interceptors.request.use(
  async function(config) {
    const state = await NetInfo.fetch();
    if (!state.isConnected) {
      Alert.alert(
        'Dispositivo offline',
        'Você precisa de internet para executar esta ação.',
      );
      throw new axios.Cancel('Operation canceled by the user.');
    } else return config;
  },
  function(error) {
    return Promise.reject(error);
  },
);
export default api;

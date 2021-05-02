import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import { AuthState, AuthContextData } from './interface';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@eSpecDoctors:token',
        '@eSpecDoctors:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const token = "das32d54as186d4asd3a8s6";
    const user  = {
      id: "74ea1a4c-949c-4ad7-974b-21aed82d842c",
      name: "Lorelle Luna",
      email: email,
      avatar_url: "https://cinefilmesbrasil.com/wp-content/uploads/2020/07/assistir-pelo-celular-Avatar-3-dublado-rapido.jpg"
    } 

    await AsyncStorage.multiSet([
      ['@eSpecDoctors:token',  token],
      ['@eSpecDoctors:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${ token }`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@eSpecDoctors:token', '@eSpecDoctors:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

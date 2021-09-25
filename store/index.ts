import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['specialistCategory', 'specialist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

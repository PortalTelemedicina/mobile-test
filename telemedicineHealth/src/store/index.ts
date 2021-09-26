import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ISpecialistsState } from './modules/specialists/types';
import { ISpecialistTypeState } from './modules/listTypeSpecialist/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
  specialist: ISpecialistsState;
  typeSpecialist: ISpecialistTypeState;
}

const sagaMiddleware = createSagaMiddleware();
const storeEnhancer = applyMiddleware(sagaMiddleware);
const enhancedCreateStore = storeEnhancer(createStore);
const store = enhancedCreateStore(rootReducer);
sagaMiddleware.run(rootSaga);

export default store;

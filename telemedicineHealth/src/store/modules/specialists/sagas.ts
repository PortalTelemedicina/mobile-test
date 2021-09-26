import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { Alert } from 'react-native';
import { ActionTypes } from './types';
import {
  getSpecialistsRequestSuccessAction,
  getSpecialistsFailureAction,
} from './actions';
import Api from '../../../services/api';

export function* getSpecialists(): SagaIterator {
  try {
    const response = yield call(Api.loadSpecialists);
    yield put(getSpecialistsRequestSuccessAction(response.data));
  } catch (e) {
    yield put(getSpecialistsFailureAction());
    Alert.alert('Informação', 'Serviço indisponivel');
  }
}

export default function* (): SagaIterator {
  yield takeLatest(ActionTypes.getSpecialistsRequest, getSpecialists);
}

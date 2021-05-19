import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { Alert } from 'react-native';
import { ActionTypes } from './types';
import {
  getSpecialistsTypesRequestAction,
  getSpecialistsTypesFailureAction,
  getSpecialistsTypesRequestSuccessAction,
  PayloadGetSpecialistRequest,
} from './actions';
import { TypeSpecialist } from '../../../utils/enum';

import Api from '../../../services/api';

type getRequestSpecialist = ReturnType<typeof getSpecialistsTypesRequestAction>;

export function* getTypeSpecialists({
  payload,
}: getRequestSpecialist): SagaIterator {
  try {
    let response;
    if (payload === TypeSpecialist.Heart) {
      response = yield call(Api.loadListSpecialistHeart);
    } else if (payload === TypeSpecialist.Dental) {
      response = yield call(Api.loadSpecialistDentalCare);
    } else if (payload === TypeSpecialist.Dermatology) {
      response = yield call(Api.loadSpecialistDemartology);
    }
    yield put(getSpecialistsTypesRequestSuccessAction(response.data));
  } catch (e) {
    yield put(getSpecialistsTypesFailureAction());
    Alert.alert('Informação', 'Serviço indisponivel');
  }
}

export default function* (): SagaIterator {
  yield takeLatest(ActionTypes.getTypeSpecialistsRequest, getTypeSpecialists);
}

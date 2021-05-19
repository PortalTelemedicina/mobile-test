import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';
import sagas from './specialists/sagas';
import typeSpecialistSagas from './listTypeSpecialist/saga';

export default function* rootSaga(): SagaIterator {
  return yield all([typeSpecialistSagas(), sagas()]);
}

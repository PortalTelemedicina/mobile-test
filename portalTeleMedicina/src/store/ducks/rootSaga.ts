import { all } from 'redux-saga/effects';

import specialist from './specialist/sagas';
import specialistList from './specialistList/sagas';

export default function* rootSaga() {
  yield all([
    specialist,
    specialistList
  ]);
}
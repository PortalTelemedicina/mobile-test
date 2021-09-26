/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { all, fork } from 'redux-saga/effects';

import specialistCategorySaga from './specialistCategory/specialistCategorySaga';
import specialistSaga from './specialist/specialistSaga';

export function* rootSaga() {
  yield all([fork(specialistCategorySaga), fork(specialistSaga)]);
}

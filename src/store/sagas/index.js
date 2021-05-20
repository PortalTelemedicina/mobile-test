import { all } from 'redux-saga/effects'
import specialistSaga from './specialist'

export default function* rootSaga() {
  yield all([specialistSaga()])
}

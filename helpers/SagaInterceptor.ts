/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put } from 'redux-saga/effects';
import { setLoading } from '../store/system/systemActions';

export default function* sagaInterceptor(
  serviceRequest: any,
  serviceRequestArgs: unknown,
  successAction: any,
  failureAction: any,
  settings = { loading: true }
): any {
  try {
    if (settings.loading) {
      yield put(setLoading({ loading: true }));
    }

    const response = yield call(serviceRequest, serviceRequestArgs);
    if (response) {
      yield call(successAction, response.data);
    }
  } catch (e: any) {
    yield call(failureAction, e?.message);
  } finally {
    yield put(setLoading({ loading: false }));
  }
}

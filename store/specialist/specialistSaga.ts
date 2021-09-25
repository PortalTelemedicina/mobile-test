import { all, put, takeEvery as takeAveryEff, delay, AllEffect } from 'redux-saga/effects';
import { getAllSpecialistByCategoryFailure, getAllSpecialistByCategorySuccess } from './specialistActions';
import { GET_ALL_SPECIALIST_BY_CATEGORY_REQUEST } from './specialistActionTypes';
import specialistService from '../../services/specialistService';
import sagaInterceptor from '../../helpers/SagaInterceptor';
import { ISpecialist } from './specialistTypes';

function* getAllSpecialistByCategory({ payload }: any): any {
  yield* sagaInterceptor(
    specialistService.getAllSpecialistByCategory,
    payload.category,
    function* success(specialists: ISpecialist[]) {
      // yield delay(2000); // For test ShimmerContainer (not run with suite-tests)
      yield put(getAllSpecialistByCategorySuccess({ specialists }));
    },
    function* error(e: any) {
      yield put(getAllSpecialistByCategoryFailure({ error: e }));
    }
  );
}

const takeEvery: any = takeAveryEff;

function* specialistSaga(): Generator<AllEffect<any>, void, unknown> {
  yield all([takeEvery(GET_ALL_SPECIALIST_BY_CATEGORY_REQUEST, getAllSpecialistByCategory)]);
}

export default specialistSaga;

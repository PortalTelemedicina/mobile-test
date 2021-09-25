import { all, put, takeLatest, delay, AllEffect, ForkEffect } from 'redux-saga/effects';
import { getAllSpecialistCategoryFailure, getAllSpecialistCategorySuccess } from './specialistCategoryActions';
import { GET_ALL_SPECIALIST_CATEGORY_REQUEST } from './specialistCategoryActionTypes';
import specialistCategoryService from '../../services/specialistCategoryService';
import sagaInterceptor from '../../helpers/SagaInterceptor';

function* getAllSpecialistCategory(): any {
  yield* sagaInterceptor(
    specialistCategoryService.getAllSpecialistCategoryService,
    undefined,
    function* success(specialistsCategories: any) {
      // yield delay(4000); // For test ShimmerContainer (not run with suite-tests)
      yield put(getAllSpecialistCategorySuccess({ specialistsCategories }));
    },
    function* error(e: any) {
      yield put(getAllSpecialistCategoryFailure({ error: e }));
    }
  );
}

function* specialistCategorySaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(GET_ALL_SPECIALIST_CATEGORY_REQUEST, getAllSpecialistCategory)]);
}

export default specialistCategorySaga;

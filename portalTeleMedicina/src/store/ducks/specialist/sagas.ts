import { call, put, takeLatest } from 'redux-saga/effects';

// Api
import api from '@services/portalTelemedicina/home';

// Actions
import { specialistSuccess, specialistFailure } from './actions';
import { SpecialistTypes, Specialist } from './types';

export function* getSpecialist() {
  try {
    const response = yield call(api.myCourses);

    const { data } = response;

    const specialists: Specialist = data.map((item) => {
      return {
        name: item.name,
        color: item.color,
        total: item.total,
        imageUrl: item.image_url,
      };
    });
    
    yield put(specialistSuccess(specialists));
  } catch (error) {
    yield put(specialistFailure());
  }
}



export default takeLatest(SpecialistTypes.GET_SPECIALIST_REQUEST, getSpecialist);
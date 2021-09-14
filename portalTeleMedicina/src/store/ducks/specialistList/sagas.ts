import { put, takeLatest } from 'redux-saga/effects';

// Api
import api from '@services/portalTelemedicina/specialist';

// Actions
import { specialistListSuccess, specialistListFailure } from './actions';
import { SpecialistListTypes, SpecialistList } from './types';

interface Payload {
  payload: {
    specialist: string;
  }
}

export function* getSpecialistList({ payload } : Payload) {
  const { specialist } = payload;


  let specialistLowCase = ''

  switch (specialist) {
    case 'Heart Specialist':
      specialistLowCase = 'list_specialist_heart.json'
      break;
    case 'Dental Care':
      specialistLowCase = 'list_specialist_dental_care.json'
      break;
    case 'Dermatology Specialist':
      specialistLowCase = 'list_specialist_dermatology.json'
      break;
    default:
      break;
  }

  try {
    const response = yield api.specialistList({ specialist: specialistLowCase });

    const { data } = response;

    const specialistsList: SpecialistList = data.map((item) => {
      return {
        name: item.name,
        description: item.description,
        distance: item.distance,
        actions: {
          chat: item.actions.chat,
          call: item.actions.call,
        }
      };
    });

    
    yield put(specialistListSuccess(specialistsList));
  } catch (error) {
    yield put(specialistListFailure());
  }
}



export default takeLatest(SpecialistListTypes.LOAD_REQUEST, getSpecialistList);
import { call, put, takeLatest } from 'redux-saga/effects';
import saga, { getSpecialists } from './sagas';
import { ActionTypes } from './types';
import * as action from './actions';
import Api from '../../../services/api';

describe('SpecialistsSagas', () => {
  describe('watch', () => {
    const iterator = saga();

    it('should take Latest ActionTypes.getSpecialistsRequest then call getSpecialists', () => {
      expect(iterator.next().value).toEqual(
        takeLatest(ActionTypes.getSpecialistsRequest, getSpecialists),
      );
    });
  });
  describe('getSpecialists work with success', () => {
    const iterator = getSpecialists();

    it('should call API loadSpecialists', () => {
      expect(iterator.next().value).toEqual(call(Api.loadSpecialists));
    });

    it('should put getSpecialistsRequestSuccessAction action with API loadSpecialists response', () => {
      const response = {
        data: [
          {
            name: 'Heart Specialist',
            image_url:
              'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/heart-shape-outline-with-lifeline.svg',
            total: 10,
            color: '#E5495E',
          },
          {
            name: 'Dental Care',
            image_url:
              'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/tooth.svg',
            total: 2,
            color: '#F6AF3D',
          },
          {
            name: 'Dermatology Specialist',
            image_url:
              'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/pimples.svg',
            total: 4,
            color: '#7349E5',
          },
        ],
      };

      expect(
        iterator.next({
          data: [
            {
              name: 'Heart Specialist',
              image_url:
                'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/heart-shape-outline-with-lifeline.svg',
              total: 10,
              color: '#E5495E',
            },
            {
              name: 'Dental Care',
              image_url:
                'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/tooth.svg',
              total: 2,
              color: '#F6AF3D',
            },
            {
              name: 'Dermatology Specialist',
              image_url:
                'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/pimples.svg',
              total: 4,
              color: '#7349E5',
            },
          ],
        }).value,
      ).toEqual(put(action.getSpecialistsRequestSuccessAction(response.data)));
    });
  });
  describe('getSpecialists worker with failure', () => {
    const iterator = getSpecialists();
    it('should call Api loadSpecialists', () => {
      expect(iterator.next().value).toEqual(call(Api.loadSpecialists));
    });

    it('should put getSpecialistsFailureAction action with Api loadSpecialists response', () => {
      expect(iterator.throw && iterator.throw(new Error()).value).toEqual(
        put(action.getSpecialistsFailureAction()),
      );
    });
  });
});

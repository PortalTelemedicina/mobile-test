import reducer from './reducer';
import * as action from './actions';

describe('SpecialistReducer', () => {
  describe('reducer', () => {
    it('should return initial state data action', () => {
      expect(reducer(undefined, { type: '' })).toEqual({
        items: [],
        loading: true,
      });
    });
    it('should return loading true on GetSpecialistRequestAction', () => {
      expect(reducer(undefined, action.getSpecialistsRequestAction())).toEqual({
        loading: true,
        items: [],
      });
    });
    it('should set loading false on GetSpecialistRequestActionSucess', () => {
      const mockItems = [
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
      ];
      expect(
        reducer(
          undefined,
          action.getSpecialistsRequestSuccessAction(mockItems),
        ),
      ).toEqual({
        loading: false,
        items: mockItems,
      });
    });
    it('should return error true in  on GetSpecialistsFailure', () => {
      expect(reducer(undefined, action.getSpecialistsFailureAction())).toEqual({
        loading: false,
        items: [],
      });
    });
  });
});

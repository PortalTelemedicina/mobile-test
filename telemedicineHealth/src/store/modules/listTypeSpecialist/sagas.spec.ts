import { call, put, takeLatest } from 'redux-saga/effects';
import saga, { getTypeSpecialists } from './saga';
import { ActionTypes } from './types';
import * as action from './actions';
import Api from '../../../services/api';

describe('TypeSpecialistsSagas', () => {
  describe('watch', () => {
    const iterator = saga();

    it('should take Latest ActionTypes.getTypeSpecialistsRequest then call getTypeSpecialists', () => {
      expect(iterator.next().value).toEqual(
        takeLatest(ActionTypes.getTypeSpecialistsRequest, getTypeSpecialists),
      );
    });
  });
  describe('getTypeSpecialists work with success', () => {
    const iterator = getTypeSpecialists({
      type: ActionTypes.getTypeSpecialistsRequest,
      payload: 'Heart Specialist',
    });

    it('should call API loadListSpecialistHeart', () => {
      expect(iterator.next().value).toEqual(call(Api.loadListSpecialistHeart));
    });

    it('should put getTypeSpecialistsRequestSuccessAction action with API loadListSpecialistHeart response', () => {
      const response = {
        data: [
          {
            name: 'Pedro Silvester',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem. Duis nec pretium arcu. Vivamus pretium leo felis',
            distance: 0.62,
          },
          {
            name: 'Margaret',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem. Duis nec pretium arcu. Vivamus pretium leo felis',
            distance: 3.23,
          },
          {
            name: 'Daisy',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem',
            distance: 4.34,
          },
          {
            name: 'Hugh Cameron',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem',
            distance: 4.34,
          },
          {
            name: 'Zakariya Ryan',
            description:
              'Aenean non diam in mi consequat efficitur eget at enim. Duis vitae odio eget mauris consequat tempus. Duis non erat vitae quam feugiat interdum. Aenean sit amet molestie quam. Vivamus sed nunc vitae nulla egestas varius. Donec facilisis sodales orci quis tempus. Nullam auctor faucibus justo vel semper',
            distance: 4.45,
          },
          {
            name: 'Jonathon Palacios',
            description:
              'Aenean id placerat leo. Sed consequat ex sed tempus commodo.',
            distance: 7.87,
          },
          {
            name: 'Eamonn Estes',
            description:
              'Aenean id placerat leo. Sed consequat ex sed tempus commodo.',
            distance: 9.21,
          },
          {
            name: 'Mared Mathews',
            description:
              'Aenean non diam in mi consequat efficitur eget at enim. Duis vitae odio eget mauris consequat tempus. Duis non erat vitae quam feugiat interdum. Aenean sit amet molestie quam. Vivamus sed nunc vitae nulla egestas varius. Donec facilisis sodales orci quis tempus. Nullam auctor faucibus justo vel semper',
            distance: 9.53,
          },
          {
            name: 'Paula Bartlett',
            description:
              'Aenean non diam in mi consequat efficitur eget at enim. Duis vitae odio eget mauris consequat tempus. Duis non erat vitae quam feugiat interdum. Aenean sit amet molestie quam. Vivamus sed nunc vitae nulla egestas varius. Donec facilisis sodales orci quis tempus. Nullam auctor faucibus justo vel semper',
            distance: 9.64,
          },
          {
            name: 'Derrick House',
            description:
              'Aenean id placerat leo. Sed consequat ex sed tempus commodo.',
            distance: 10.1,
          },
        ],
      };

      expect(
        iterator.next({
          data: [
            {
              name: 'Pedro Silvester',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem. Duis nec pretium arcu. Vivamus pretium leo felis',
              distance: 0.62,
            },
            {
              name: 'Margaret',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem. Duis nec pretium arcu. Vivamus pretium leo felis',
              distance: 3.23,
            },
            {
              name: 'Daisy',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem',
              distance: 4.34,
            },
            {
              name: 'Hugh Cameron',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec est lorem',
              distance: 4.34,
            },
            {
              name: 'Zakariya Ryan',
              description:
                'Aenean non diam in mi consequat efficitur eget at enim. Duis vitae odio eget mauris consequat tempus. Duis non erat vitae quam feugiat interdum. Aenean sit amet molestie quam. Vivamus sed nunc vitae nulla egestas varius. Donec facilisis sodales orci quis tempus. Nullam auctor faucibus justo vel semper',
              distance: 4.45,
            },
            {
              name: 'Jonathon Palacios',
              description:
                'Aenean id placerat leo. Sed consequat ex sed tempus commodo.',
              distance: 7.87,
            },
            {
              name: 'Eamonn Estes',
              description:
                'Aenean id placerat leo. Sed consequat ex sed tempus commodo.',
              distance: 9.21,
            },
            {
              name: 'Mared Mathews',
              description:
                'Aenean non diam in mi consequat efficitur eget at enim. Duis vitae odio eget mauris consequat tempus. Duis non erat vitae quam feugiat interdum. Aenean sit amet molestie quam. Vivamus sed nunc vitae nulla egestas varius. Donec facilisis sodales orci quis tempus. Nullam auctor faucibus justo vel semper',
              distance: 9.53,
            },
            {
              name: 'Paula Bartlett',
              description:
                'Aenean non diam in mi consequat efficitur eget at enim. Duis vitae odio eget mauris consequat tempus. Duis non erat vitae quam feugiat interdum. Aenean sit amet molestie quam. Vivamus sed nunc vitae nulla egestas varius. Donec facilisis sodales orci quis tempus. Nullam auctor faucibus justo vel semper',
              distance: 9.64,
            },
            {
              name: 'Derrick House',
              description:
                'Aenean id placerat leo. Sed consequat ex sed tempus commodo.',
              distance: 10.1,
            },
          ],
        }).value,
      ).toEqual(
        put(action.getSpecialistsTypesRequestSuccessAction(response.data)),
      );
    });
  });
  describe('getSpecialistsType worker with failure', () => {
    const iterator = getTypeSpecialists({
      type: ActionTypes.getTypeSpecialistsRequest,
      payload: 'Heart Specialist',
    });
    it('should call Api loadListSpecialistHeart', () => {
      expect(iterator.next().value).toEqual(call(Api.loadListSpecialistHeart));
    });

    it('should put getSpecialistsTypesFailureAction action with Api loadListSpecialistHeart response', () => {
      expect(iterator.throw && iterator.throw(new Error()).value).toEqual(
        put(action.getSpecialistsTypesFailureAction()),
      );
    });
  });
});

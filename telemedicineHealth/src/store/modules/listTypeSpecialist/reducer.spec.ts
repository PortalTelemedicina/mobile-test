import reducer from './reducer';
import * as action from './actions';

describe('TypeSpecialistReducer', () => {
  describe('reducer', () => {
    it('should return initial state data action', () => {
      expect(reducer(undefined, { type: '' })).toEqual({
        itemsTypesSpecialist: [],
        loadingTypes: true,
      });
    });
    it('should return loading true on GetSpecialistTypesRequestAction', () => {
      const payloadFake = 'Heart Specialist';
      expect(
        reducer(
          undefined,
          action.getSpecialistsTypesRequestAction(payloadFake),
        ),
      ).toEqual({
        itemsTypesSpecialist: [],
        loadingTypes: true,
      });
    });
    it('should set loading false on GetSpecialistTypesRequestActionSucess', () => {
      const mockItems = [
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
          distance: 4.45,
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
      ];
      expect(
        reducer(
          undefined,
          action.getSpecialistsTypesRequestSuccessAction(mockItems),
        ),
      ).toEqual({
        itemsTypesSpecialist: mockItems,
        loadingTypes: false,
      });
    });
    it('should return error true in  on GetSpecialistTypesFailure', () => {
      expect(
        reducer(undefined, action.getSpecialistsTypesFailureAction()),
      ).toEqual({
        loadingTypes: false,
        itemsTypesSpecialist: [],
      });
    });
  });
});

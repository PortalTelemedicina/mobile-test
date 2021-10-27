import {mockMedicalSpecialties} from '@/../tests/mocks/helpers/mock-medical-specialties';
import {mockQuickActions} from '@/../tests/mocks/helpers/mock-quick-actions';
import {ListMedicalSpecialtiesSpy} from '@/../tests/mocks/spies/usecases/list-medical-specialties-spy';
import {ListQuickActionsSpy} from '@/../tests/mocks/spies/usecases/list-quick-actions-spy';
import {ConnectionError} from '@/app/domain/errors';
import {ListSpecialists} from '@/app/UI/pages';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {RouteList} from '@/app/UI/shared/routes';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  cleanup,
  fireEvent,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';

jest.mock('react-native-svg', () => {
  const React = require('React');
  const createComponent = function (name: string) {
    return class extends React.Component {
      static displayName = name;

      render() {
        const type = name;
        return React.createElement(type, this.props, this.props.children);
      }
    };
  };

  return {
    SvgUri: createComponent('SvgUri'),
  };
});

type InitialState = {
  sut: RenderAPI;
  listQuickActionsSpy: ListQuickActionsSpy;
  listMedicalSpecialtiesSpy: ListMedicalSpecialtiesSpy;
  navigationStub: any;
};

const getInitialState = (
  {error}: {error: any} = {error: null},
): InitialState => {
  const listQuickActionsSpy = new ListQuickActionsSpy(mockQuickActions());
  const listMedicalSpecialtiesSpy = new ListMedicalSpecialtiesSpy(
    mockMedicalSpecialties(1),
  );
  if (error) {
    jest.spyOn(listMedicalSpecialtiesSpy, 'run').mockImplementationOnce(() => {
      throw error;
    });
  }

  const navigationStub: Partial<
    NativeStackNavigationProp<RouteList, 'APPOINTMENT'>
  > = {
    navigate: jest.fn(),
  };

  const sut = render(
    <NavigationContainer>
      <UIKittenProvider>
        <ListSpecialists
          listQuickActions={listQuickActionsSpy}
          listMedicalSpecialties={listMedicalSpecialtiesSpy}
          // NOTICE: Ignore for now because we just want a mocked version of the navigation prop
          // On the perfect case we need to make an actual NavigationStub class implementing NativeStackNavigationProp
          // @ts-ignore:next-line
          navigation={navigationStub}
        />
      </UIKittenProvider>
    </NavigationContainer>,
  );
  return {sut, listQuickActionsSpy, listMedicalSpecialtiesSpy, navigationStub};
};

describe('ListSpecialists', () => {
  afterEach(cleanup);

  test('should render with initial state', async () => {
    const {sut} = getInitialState();

    await waitFor(() => {
      expect(sut.getByText('Specialists')).toBeDefined();
      expect(sut.getByText('What do you need?')).toBeDefined();
    });
  });

  test('should list quick actions correctly', async () => {
    const {sut, listQuickActionsSpy} = getInitialState();

    await waitFor(() => {
      expect(listQuickActionsSpy.calls).toBe(1);
      listQuickActionsSpy.quickActions.forEach(action => {
        expect(sut.getByText(action.title)).toBeDefined();
        const actionTouchable = sut.getByTestId(`action-${action.title}`);
        expect(actionTouchable.props.accessibilityState.disabled).toBe(
          !action.active,
        );
      });
    });
  });

  test('should call ListSpecialties only once', async () => {
    const {listMedicalSpecialtiesSpy} = getInitialState();

    await waitFor(() => {
      expect(listMedicalSpecialtiesSpy.calls).toBe(1);
    });
  });

  test('should list medical specialties correctly', async () => {
    const {sut, listMedicalSpecialtiesSpy} = getInitialState();
    await waitFor(() => {
      listMedicalSpecialtiesSpy.medicalSpecialties.forEach(medicalSpecialty => {
        expect(sut.getByText(medicalSpecialty.name)).toBeDefined();
      });
    });
  });

  test('should show error if ListMedicalSpecialties throws error', async () => {
    jest.dontMock('react-native-svg');
    const error = new ConnectionError();
    const {sut} = getInitialState({error});

    await waitFor(() => {
      expect(sut.getByTestId('view-internet-error')).toBeDefined();
      expect(sut.getByText(error.message)).toBeDefined();
    });
  });

  test('should call navigate on medical specialty press', async () => {
    const {sut, navigationStub, listMedicalSpecialtiesSpy} = getInitialState();
    const spy = jest.spyOn(navigationStub, 'navigate');
    await waitFor(() => {
      fireEvent.press(sut.getAllByTestId('touchable')[0]);
      expect(spy).toHaveBeenCalledWith('LIST-DOCTORS', {
        type: 'cardiologist',
        title: listMedicalSpecialtiesSpy.medicalSpecialties[0].name,
      });
    });
  });
});

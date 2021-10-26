import {mockMedicalSpecialties} from '@/../tests/mocks/helpers/mock-medical-specialties';
import {mockQuickActions} from '@/../tests/mocks/helpers/mock-quick-actions';
import {ListMedicalSpecialtiesSpy} from '@/../tests/mocks/spies/usecases/list-medical-specialties-spy';
import {ListQuickActionsSpy} from '@/../tests/mocks/spies/usecases/list-quick-actions-spy';
import {ListSpecialists} from '@/app/UI/pages';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {
  cleanup,
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
};

const getInitialState = (): InitialState => {
  const listQuickActionsSpy = new ListQuickActionsSpy(mockQuickActions());
  const listMedicalSpecialtiesSpy = new ListMedicalSpecialtiesSpy(
    mockMedicalSpecialties(1),
  );
  const sut = render(
    <UIKittenProvider>
      <ListSpecialists
        listQuickActions={listQuickActionsSpy}
        listMedicalSpecialties={listMedicalSpecialtiesSpy}
      />
    </UIKittenProvider>,
  );
  return {sut, listQuickActionsSpy, listMedicalSpecialtiesSpy};
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
});

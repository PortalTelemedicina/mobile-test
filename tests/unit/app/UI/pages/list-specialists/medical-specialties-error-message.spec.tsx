import {mockMedicalSpecialty} from '@/../tests/mocks/helpers/mock-medical-specialties';
import MedicalSpecialtiesErrorMessage, {
  MedicalSpecialtiesErrorMessageProps,
} from '@/app/UI/pages/list-specialists/components/medical-specialties-error-message';
import MedicalSpecialtyCard, {
  MedicalSpecialtyCardProps,
} from '@/app/UI/pages/list-specialists/components/medical-specialty-card';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {
  cleanup,
  fireEvent,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import faker from 'faker';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (
  params: MedicalSpecialtiesErrorMessageProps,
): InitialState => {
  const {message = '', loading = true, refreshFn = async () => {}} = params;
  const sut = render(
    <UIKittenProvider>
      <MedicalSpecialtiesErrorMessage
        message={message}
        refreshFn={refreshFn}
        loading={loading}
      />
    </UIKittenProvider>,
  );
  return {sut};
};

describe('MedicalSpecialtiesErrorMessage', () => {
  afterEach(cleanup);

  test('should render with initial state', async () => {
    const {sut} = getInitialState({});
    await waitFor(() => {
      expect(sut.getByTestId('error-internet')).toBeDefined();
      expect(sut.getByTestId('loading')).toBeDefined();
      expect(
        sut.getByTestId('btn-tryagain').props.accessibilityState.disabled,
      ).toBe(true);
    });
  });

  test('should render correct message', async () => {
    const fakeMessage = faker.random.words(5);
    const {sut} = getInitialState({
      message: fakeMessage,
      loading: false,
    });
    await waitFor(() => {
      expect(sut.getByText(fakeMessage)).toBeDefined();
    });
  });

  test('should call refreshFn on press try again', async () => {
    const fakeFn = jest.fn();
    const {sut} = getInitialState({
      message: faker.random.word(),
      loading: false,
      refreshFn: fakeFn,
    });
    await waitFor(() => {
      fireEvent.press(sut.getByTestId('btn-tryagain'));
      expect(fakeFn).toHaveBeenCalled();
    });
  });
});

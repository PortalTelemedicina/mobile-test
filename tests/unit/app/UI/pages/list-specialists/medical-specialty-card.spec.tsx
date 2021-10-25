import {mockMedicalSpecialty} from '@/../tests/mocks/helpers/mock-medical-specialties';
import MedicalSpecialtyCard, {
  MedicalSpecialtyCardProps,
} from '@/app/UI/pages/list-specialists/components/medical-specialty-card';
import {UIKittenProvider} from '@/app/UI/shared/components';
import {
  cleanup,
  render,
  RenderAPI,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';

type InitialState = {
  sut: RenderAPI;
};

const getInitialState = (params: MedicalSpecialtyCardProps): InitialState => {
  const {
    onPress = jest.fn(),
    medicalSpecialty = mockMedicalSpecialty(),
    loading = true,
  } = params;
  const sut = render(
    <UIKittenProvider>
      <MedicalSpecialtyCard
        onPress={onPress}
        medicalSpecialty={medicalSpecialty}
        loading={loading}
      />
    </UIKittenProvider>,
  );
  return {sut};
};

describe('MedicalSpecialtyCard', () => {
  afterEach(cleanup);

  test('should render with initial state', async () => {
    const {sut} = getInitialState({});
    await waitFor(() => {
      expect(sut.getByTestId('view-card-loading')).toBeDefined();
    });
  });

  test('should render with loading if medicalSpecialty is null', async () => {
    const {sut} = getInitialState({medicalSpecialty: null, loading: false});
    await waitFor(() => {
      expect(sut.getByTestId('view-card-loading')).toBeDefined();
    });
  });

  test('should render correctly when medicalSpecialty is passed', async () => {
    const specialty = mockMedicalSpecialty();
    const {sut} = getInitialState({
      medicalSpecialty: specialty,
      loading: false,
    });
    await waitFor(() => {
      const card = sut.getByTestId(`medicalspecialty-${specialty.name}`);
      const icon = sut.getByTestId(`icon-${specialty.image}`);
      const amount = sut.getByTestId('amount');
      expect(card.props.style[1].backgroundColor).toBe(specialty.color);
      expect(card).toBeDefined();
      expect(icon).toBeDefined();
      expect(amount.children[0]).toBe(`${specialty.amountAvailable}`);
    });
  });
});

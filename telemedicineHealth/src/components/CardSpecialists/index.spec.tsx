import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CardSpecialists from './index';

describe('CardSpecialists', () => {
  it('should render', () => {
    const { getByText } = render(
      <CardSpecialists
        total={40}
        testId="teste"
        name="description test"
        color="#fff"
        image_url="https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/heart-shape-outline-with-lifeline.svg"
      />,
    );

    expect(getByText('description test')).toBeTruthy();
  });
  it('should call onPress function when press at CardSpecialists', () => {
    const onPressMock = jest.fn();
    const testId = 'teste';

    const { getByTestId } = render(
      <CardSpecialists
        total={40}
        testId={testId}
        name="description test"
        color="#fff"
        onPress={onPressMock}
        image_url="https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/heart-shape-outline-with-lifeline.svg"
      />,
    );
    const container = getByTestId(testId);
    fireEvent.press(container);
    fireEvent.press(container);

    expect(onPressMock).toHaveBeenCalledTimes(2);
  });
  it('should render Card when receive prop testId', () => {
    const onPressMock = jest.fn();
    const testId = 'teste';

    const { getByTestId } = render(
      <CardSpecialists
        total={40}
        testId={testId}
        name="description test"
        color="#fff"
        onPress={onPressMock}
        image_url="https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/heart-shape-outline-with-lifeline.svg"
      />,
    );

    expect(getByTestId(testId)).toBeTruthy();
  });
});

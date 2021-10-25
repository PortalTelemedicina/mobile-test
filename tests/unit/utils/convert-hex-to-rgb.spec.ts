import {convertHexToRgb, convertHexToRgbParams} from '@/utils';

type InitialState = {
  sut: (params: convertHexToRgbParams) => string;
};

const getInitialState = (): InitialState => {
  const sut = convertHexToRgb;
  return {sut};
};

describe('convertHexToRgb', () => {
  test('should return correct color without alpha', () => {
    const {sut} = getInitialState();
    const result = sut({hex: '#BABACA'});
    expect(result).toBe('rgb(186, 186, 202)');
  });

  test('should return correct color with alpha', () => {
    const {sut} = getInitialState();
    const result = sut({hex: '#BABACA', alpha: 0.5});
    expect(result).toBe('rgba(186, 186, 202, 0.5)');
  });
});

import {BadHexColorError} from '@/app/domain/errors';

export type convertHexToRgbParams = {
  hex: string;
  alpha?: number;
};

export function convertHexToRgb(params: convertHexToRgbParams): string {
  if (params.hex.length === 7) {
    const r = parseInt(params.hex.slice(1, 3), 16),
      g = parseInt(params.hex.slice(3, 5), 16),
      b = parseInt(params.hex.slice(5, 7), 16);

    if (params.alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + params.alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  } else {
    throw new BadHexColorError();
  }
}

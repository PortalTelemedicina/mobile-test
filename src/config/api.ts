import {ListDoctorsRoute} from '@/app/domain/protocols/http/mappings';

type ApiConfigSpec = {
  baseUrl?: string;
  listDoctorsMapping?: ListDoctorsRoute[];
};

export const ApiConfig: ApiConfigSpec = {
  baseUrl:
    'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api',
  listDoctorsMapping: [
    {
      type: 'cardiologist',
      url: 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json',
    },
    {
      type: 'dentist',
      url: 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dental_care.json',
    },
    {
      type: 'dermatologist',
      url: 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dermatology.json',
    },
  ],
};

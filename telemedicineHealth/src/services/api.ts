import axios from 'axios';
import { AxiosResponse } from 'axios';

const Api = {
  loadSpecialists: (): Promise<AxiosResponse> =>
    axios.get(
      'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/home_specialists.json',
    ),

  loadListSpecialistHeart: (): Promise<AxiosResponse> =>
    axios.get(
      'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json',
    ),

  loadSpecialistDemartology: (): Promise<AxiosResponse> =>
    axios.get(
      'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dermatology.json',
    ),

  loadSpecialistDentalCare: (): Promise<AxiosResponse> =>
    axios.get(
      'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api//list_specialist_dental_care.json',
    ),
};

export default Api;

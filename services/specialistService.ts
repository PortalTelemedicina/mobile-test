import axios from 'axios';
import { ISpecialist } from '../store/specialist/specialistTypes';
import { systemConfig } from '../system';

export default {
  getAllSpecialistByCategory(category: string) {
    const json = systemConfig.getJsonNameBySpecialistCategory(category);

    return axios.get<ISpecialist[]>(`${systemConfig.getApiUrl()}${json}`);
  },
};

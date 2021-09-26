import axios, { AxiosResponse } from 'axios';
import { ISpecialistCategory } from '../store/specialistCategory/specialistCategoryTypes';
import { systemConfig } from '../system';

export default {
  getAllSpecialistCategoryService(): Promise<AxiosResponse<ISpecialistCategory[]>> {
    return axios.get<ISpecialistCategory[]>(`${systemConfig.getApiUrl()}home_specialists.json`);
  },
};

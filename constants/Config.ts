const getApiUrl = (): string => {
  return 'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/';
};

const getConstantsBySpecilistCategory = (category: string) => {
  switch (category) {
    case 'Heart Specialist':
      return { jsonName: 'list_specialist_heart.json', iconName: 'heart-outline' };
    case 'Dental Care':
      return { jsonName: 'list_specialist_dental_care.json', iconName: 'tooth-outline' };
    default:
      return { jsonName: 'list_specialist_dermatology.json', iconName: 'head-outline' };
  }
};

const getJsonNameBySpecialistCategory = (category: string): string => {
  return getConstantsBySpecilistCategory(category).jsonName;
};
const getIconNameBySpecialistCategory = (category: any): string => {
  return getConstantsBySpecilistCategory(category).iconName;
};

const getUserDefault = (): string => 'Lorelle Lunna';

export default {
  getJsonNameBySpecialistCategory,
  getIconNameBySpecialistCategory,
  getApiUrl,
  getUserDefault,
};

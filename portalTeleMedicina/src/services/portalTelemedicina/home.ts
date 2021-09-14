import callBaseApi from '@services/base';

const specialistType = {
  myCourses: () => {
    return callBaseApi({
      title: 'Home - Specialists',
      method: 'GET',
      endpoint: '/home_specialists.json',
    });
  },
};

export default specialistType;

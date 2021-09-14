import callBaseApi from '@services/base';

const specialistList = {
  specialistList: ({ specialist }: { specialist: string }) => {
    return callBaseApi({
      title: 'Specialist - SpecialistsList',
      method: 'GET',
      endpoint: `/${specialist}`,
    });
  },
};

export default specialistList;

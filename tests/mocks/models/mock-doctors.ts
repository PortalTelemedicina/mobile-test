import {ContactAction, Doctor} from '@/app/domain/entities';
import faker from 'faker';

export const makeDoctorContactAction = ({
  withCall = true,
  withChat = true,
}: {
  withChat?: boolean;
  withCall?: boolean;
}): ContactAction => {
  if (withCall && withChat) {
    return {chat: faker.internet.url(), call: faker.random.word()};
  }
  if (withCall && !withChat) {
    return {call: faker.random.word()};
  }
  if (!withCall && withChat) {
    return {chat: faker.internet.url()};
  }
  return {};
};

export const makeDoctor = ({
  withCall = true,
  withChat = true,
}: {
  withChat?: boolean;
  withCall?: boolean;
}): Doctor => {
  return {
    name: faker.name.findName(),
    description: faker.random.words(8),
    distance: faker.datatype.number({min: 1, max: 10}),
    avatar: faker.internet.url(),
    actions: makeDoctorContactAction({withCall, withChat}),
  };
};

export const makeFakeDoctors = ({
  amount = 5,
  withCall = true,
  withChat = true,
}: {
  amount?: number;
  withChat?: boolean;
  withCall?: boolean;
}): Doctor[] => {
  const response: Doctor[] = [];
  for (let index = 0; index < amount; index++) {
    response.push(makeDoctor({withChat, withCall}));
  }
  return response;
};

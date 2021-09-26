import { RouteProp } from '@react-navigation/core';

import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type RoutesSpecialists = {
  Home: Record<string, unknown>;
  ListSpecialists: Record<string, unknown>;
  MainBottom: Record<string, unknown>;
};

// eslint-disable-next-line no-shadow
export enum RouteNames {
  Home = 'Home',
  ListSpecialists = 'ListSpecialists',
  MainBottom = 'MainBottom',
}

export type SpecialistRouteProp<
  RouteName extends keyof RoutesSpecialists
> = RouteProp<RoutesSpecialists, RouteName>;

export type SpecialistNavigationProp<
  RouteName extends keyof RoutesSpecialists
> = StackNavigationProp<RoutesSpecialists, RouteName>;

export type SpecilaistScreenProp<
  RouteName extends keyof RoutesSpecialists
> = StackScreenProps<RoutesSpecialists, RouteName>;

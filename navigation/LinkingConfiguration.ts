import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeStackScreen: {
            screens: {
              HomeScreen: 'one',
              SpecialistListScreen: 'specialistListScreen',
            },
          },
          Tab2: {
            screens: {
              BlankScreen: 'blankScreen',
            },
          },
          Tab3: {
            screens: {
              BlankScreen: 'blankScreen',
            },
          },
          Tab4: {
            screens: {
              BlankScreen: 'blankScreen',
            },
          },
        },
      },
    },
  },
};

export default linking;

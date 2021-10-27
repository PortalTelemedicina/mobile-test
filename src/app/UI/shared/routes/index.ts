import {AvailableMedicalSpecialties} from '@/app/domain/entities';

export {default as HomeRoutes} from './home/home.routes';
export {default as Router} from './router';

// Route List
export type AvailableRoutes =
  | 'LOGIN'
  | 'HOME'
  | 'APPOINTMENT'
  | 'CHAT'
  | 'ACTIVITY'
  | 'MENU';

export type RouteList = {
  LOGIN: undefined;
  HOME: undefined;
  APPOINTMENT: undefined;
  'LIST-DOCTORS': {type: AvailableMedicalSpecialties};
  CHAT: undefined;
  ACTIVITY: undefined;
  MENU: undefined;
};

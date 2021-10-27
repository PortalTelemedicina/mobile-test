import {ContactAction} from '.';

export interface Doctor {
  name: string;
  description: string;
  avatar: string;
  distance: number;
  actions: ContactAction;
}

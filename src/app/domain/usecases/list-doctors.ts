import {Doctor} from '../entities';

export interface ListDoctors {
  run(): Promise<Doctor[]>;
}

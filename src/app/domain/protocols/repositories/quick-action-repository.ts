import {QuickAction} from '../../entities';

export interface QuickActionRepository {
  get(): QuickAction[];
}

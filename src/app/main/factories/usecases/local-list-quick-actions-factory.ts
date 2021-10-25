import {LocalListQuickActions} from '@/app/application/usecases/';
import {MakeLocalQuickActionRepository} from '../adapters';

export const MakeLocalListQuickActions = (): LocalListQuickActions => {
  const quickActionsRepository = MakeLocalQuickActionRepository();
  return new LocalListQuickActions(quickActionsRepository);
};

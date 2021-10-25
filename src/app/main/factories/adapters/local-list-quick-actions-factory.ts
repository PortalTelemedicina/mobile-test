import {LocalQuickActionRepository} from '@/app/application/repositories';

export const MakeLocalQuickActionRepository =
  (): LocalQuickActionRepository => {
    return new LocalQuickActionRepository();
  };

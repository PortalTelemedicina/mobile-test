import {QuickAction} from '@/app/domain/entities';
import {ListQuickActions} from '@/app/domain/usecases';

export class ListQuickActionsSpy implements ListQuickActions {
  quickActions?: QuickAction[] = [];
  calls?: number = 0;

  constructor(quickActions?: QuickAction[]) {
    this.quickActions = quickActions;
  }

  run(): QuickAction[] {
    this.calls += 1;
    return this.quickActions;
  }
}

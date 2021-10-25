import {QuickAction} from '@/app/domain/entities';
import {ListQuickActions} from '@/app/domain/usecases';

export class ListQuickActionsSpy implements ListQuickActions {
  quickActions?: QuickAction[] = [];
  calls?: number = 0;

  run(): QuickAction[] {
    this.calls += 1;
    return this.quickActions;
  }
}

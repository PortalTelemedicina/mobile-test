import {QuickAction} from '@/app/domain/entities';
import {QuickActionRepository} from '@/app/domain/protocols/repositories';

export class LocalQuickActionRepositorySpy implements QuickActionRepository {
  quickActions?: QuickAction[] = [];
  calls?: number = 0;

  get(): QuickAction[] {
    this.calls += 1;
    return this.quickActions;
  }
}

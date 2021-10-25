import {QuickAction} from '@/app/domain/entities';
import {QuickActionRepository} from '@/app/domain/protocols/repositories';
import {ListQuickActions} from '@/app/domain/usecases';

export class LocalListQuickActions implements ListQuickActions {
  constructor(private readonly repository: QuickActionRepository) {}

  run(): QuickAction[] {
    return this.repository.get();
  }
}

import {QuickAction} from '@/app/domain/entities';
import {QuickActionRepository} from '@/app/domain/protocols/repositories';
import {SharedI18n, translate} from '@/config/locale';

export class LocalQuickActionRepository implements QuickActionRepository {
  get(): QuickAction[] {
    return [
      {
        title: translate(SharedI18n.diagnostic),
        icon: 'diagnostic',
        active: true,
      },
      {
        title: translate(SharedI18n.consultation),
        icon: 'consultation',
        active: false,
      },
      {
        title: translate(SharedI18n.nurse),
        icon: 'nurse',
        active: false,
      },
      {
        title: translate(SharedI18n.ambulance),
        icon: 'ambulance',
        active: false,
      },
      {
        title: translate(SharedI18n.laboratory),
        icon: 'laboratory',
        active: false,
      },
      {
        title: translate(SharedI18n.medicine),
        icon: 'medicine',
        active: false,
      },
    ];
  }
}

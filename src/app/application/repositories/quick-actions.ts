import {QuickAction} from '@/app/domain/entities';
import {QuickActionRepository} from '@/app/domain/protocols/repositories';
import {SharedI18n, translate} from '@/config/locale';

export class LocalQuickActionRepository implements QuickActionRepository {
  get(): QuickAction[] {
    return [
      {
        title: translate(SharedI18n.diagnostic),
        icon: '@/assets/icons/stethoscope.svg',
        active: false,
      },
      {
        title: translate(SharedI18n.consultation),
        icon: '@/assets/icons/patient.svg',
        active: false,
      },
      {
        title: translate(SharedI18n.nurse),
        icon: '@/assets/icons/nurse.svg',
        active: false,
      },
      {
        title: translate(SharedI18n.ambulance),
        icon: '@/assets/icons/ambulance.svg',
        active: false,
      },
      {
        title: translate(SharedI18n.laboratory),
        icon: '@/assets/icons/flask.svg',
        active: false,
      },
      {
        title: translate(SharedI18n.medicine),
        icon: '@/assets/icons/medicine.svg',
        active: false,
      },
    ];
  }
}

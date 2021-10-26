export type AvailableIcons =
  | 'diagnostic'
  | 'consultation'
  | 'nurse'
  | 'ambulance'
  | 'laboratory'
  | 'medicine';

export interface QuickAction {
  title: string;
  icon: AvailableIcons;
  active: boolean;
}

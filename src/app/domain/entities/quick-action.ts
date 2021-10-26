export interface QuickAction {
  title: string;
  icon:
    | 'diagnostic'
    | 'consultation'
    | 'nurse'
    | 'ambulance'
    | 'laboratory'
    | 'medicine';
  active: boolean;
}

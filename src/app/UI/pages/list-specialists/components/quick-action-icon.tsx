import {QuickAction} from '@/app/domain/entities';
import {
  AmbulanceIcon,
  ConsultationIcon,
  DiagnosticIcon,
  LaboratoryIcon,
  MedicineIcon,
  NurseIcon,
} from '@/assets/icons';
import React from 'react';

export type QuickActionIconProps = {
  action?: QuickAction;
  color?: string;
};

const QuickActionIcon: React.FC<QuickActionIconProps> = ({action, color}) => {
  if (action.icon === 'diagnostic') {
    return (
      <DiagnosticIcon
        fill={color}
        testID={`icon-${action.icon}`}
        width="45%"
        height="45%"
      />
    );
  }
  if (action.icon === 'consultation') {
    return (
      <ConsultationIcon
        fill={color}
        testID={`icon-${action.icon}`}
        width="45%"
        height="45%"
      />
    );
  }
  if (action.icon === 'nurse') {
    return (
      <NurseIcon
        fill={color}
        testID={`icon-${action.icon}`}
        width="45%"
        height="45%"
      />
    );
  }
  if (action.icon === 'ambulance') {
    return (
      <AmbulanceIcon
        fill={color}
        testID={`icon-${action.icon}`}
        width="45%"
        height="45%"
      />
    );
  }
  if (action.icon === 'laboratory') {
    return (
      <LaboratoryIcon
        fill={color}
        testID={`icon-${action.icon}`}
        width="45%"
        height="45%"
      />
    );
  }
  if (action.icon === 'medicine') {
    return (
      <MedicineIcon
        fill={color}
        testID={`icon-${action.icon}`}
        width="45%"
        height="45%"
      />
    );
  }
  return (
    <DiagnosticIcon
      fill={color}
      testID={`icon-${action.icon}`}
      width="45%"
      height="45%"
    />
  );
};

export default QuickActionIcon;

import diagnosticIcon from '../../../../assets/icons/stethoscope.png';
import patientIcon from '../../../../assets/icons/patient.png';
import nurseIcon from '../../../../assets/icons/nurse.png';
import ambulanceIcon from '../../../../assets/icons/ambulance.png';
import flaskIcon from '../../../../assets/icons/flask.png';
import mediceIcon from '../../../../assets/icons/medicine.png';
import theme from "../../../../theme";

const items = [
  {
    title: 'Diagnostic',
    icon: diagnosticIcon,
    color: theme.colors.pink,
    colorText: theme.colors.white,
  },
  {
    title: 'Consultation',
    icon: patientIcon,
    color: theme.colors.white,
    colorText: theme.colors.darkslategray,
  },
  {
    title: 'nurse',
    icon: nurseIcon,
    color: theme.colors.white,
    colorText: theme.colors.darkslategray,
  },
  {
    title: 'Ambulance',
    icon: ambulanceIcon,
    color: theme.colors.white,
    colorText: theme.colors.darkslategray,
  },
  {
    title: 'Lab Work',
    icon: flaskIcon,
    color: theme.colors.white,
    colorText: theme.colors.darkslategray,
  },
  {
    title: 'Medicine',
    icon: mediceIcon,
    color: theme.colors.white,
    colorText: theme.colors.darkslategray,
  },
];

export default items;

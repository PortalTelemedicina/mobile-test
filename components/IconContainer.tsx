import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { systemColors } from '../system';

interface IconContainerProps extends React.ComponentProps<typeof MaterialCommunityIcons> {
  name: any;
  color?: string;
}

export default function IconContainer(props: IconContainerProps): JSX.Element {
  const { name, size, color, style } = props;
  return <MaterialCommunityIcons name={name} size={size} color={color} style={style} />;
}

IconContainer.defaultProps = { color: systemColors.brown };

import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const AppointmentIcon = props => <Icon {...props} name="clipboard-outline" />;
const ChatIcon = props => <Icon {...props} name="message-square-outline" />;
const ActivityIcon = props => <Icon {...props} name="flash-outline" />;
const MenuIcon = props => <Icon {...props} name="menu-outline" />;

export type HomeBottomBarProps = {
  currentIndex: number;
  onSelect(index: number): void;
};

export const HomeBottomBar: React.FC<HomeBottomBarProps> = ({
  currentIndex,
  onSelect,
}) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      edges={['bottom']}
      style={{backgroundColor: theme['background-basic-color-1']}}
    >
      <BottomNavigation selectedIndex={currentIndex} onSelect={onSelect}>
        <BottomNavigationTab icon={AppointmentIcon} testID="tab-appointment" />
        <BottomNavigationTab icon={ChatIcon} testID="tab-chat" />
        <BottomNavigationTab icon={ActivityIcon} testID="tab-activity" />
        <BottomNavigationTab icon={MenuIcon} testID="tab-menu" />
      </BottomNavigation>
    </SafeAreaView>
  );
};

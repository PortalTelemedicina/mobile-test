import React from 'react';

import HomeIcon from '@assets/icons/home-dark.svg';
import DownloadIcon from '@assets/icons/home-dark.svg';
import SearchIcon from '@assets/icons/home-dark.svg';
import ProfileIcon from '@assets/icons/home-dark.svg';

export interface TabBarIconProps {
  screen: string;
  isSelected: boolean;
}

export enum ScreenNames {
  HOME = 'Home',
  DOWNLOADS = 'DowloadsScreen',
  SEARCH = 'SearchScreen',
  PROFILE = 'ProfileScreen',
}

const TabBarIcon: React.FC<TabBarIconProps> = ({
  screen,
  isSelected,
}: TabBarIconProps) => {
  switch (screen) {
    case ScreenNames.HOME:
      return <HomeIcon width={30} height={30} fill='#fff' />
    case ScreenNames.DOWNLOADS:
      return <DownloadIcon width={30} height={30} fill='#fff' />
    case ScreenNames.SEARCH:
      return <SearchIcon fill='#fff' />;
    case ScreenNames.PROFILE:
      return <ProfileIcon width={30} height={30} fill='#fff' />
    default:
      return null;
  }
};

export { ScreenNames };
export default TabBarIcon;

import React from 'react';
import { Image } from 'react-native';

import iconHi from '../../assets/icons/hi/hi.png';

import { TabArea, TabItem, TabItemText, TabItemLarge, IconTab } from './styles';

const TabBottomNavigate: React.FC = ({ state, navigation }) => {
  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Historic')}>
        <IconTab name="list-ul" size={24} isChecked={state.index === 0} />
        <TabItemText>Histórico</TabItemText>
      </TabItem>

      <TabItem onPress={() => goTo('Shopping')}>
        <IconTab name="shopping-cart" size={24} isChecked={state.index === 1} />
        <TabItemText>Shopping</TabItemText>
      </TabItem>

      <TabItemLarge onPress={() => goTo('Home')}>
        <Image source={iconHi} />
      </TabItemLarge>

      <TabItem onPress={() => goTo('HiClub')}>
        <IconTab name="star" size={24} isChecked={state.index === 3} />
        <TabItemText>Hi-Club</TabItemText>
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        <IconTab
          name="user"
          size={24}
          isChecked={state.index >= 4 && state.index < 16}
        />
        <TabItemText>Minha Conta</TabItemText>
      </TabItem>
    </TabArea>
  );
};

export default TabBottomNavigate;

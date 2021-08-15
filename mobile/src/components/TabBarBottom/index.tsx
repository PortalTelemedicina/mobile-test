import React from 'react';

import { 
  TabArea, 
  TabItem, 
  TabItemText,
  IconTab 
} from './styles';

const TabBottomNavigate: React.FC = ({ state, navigation }) => {
  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={ () => goTo('Home') }>
        <IconTab name="home" size={24} isChecked={ state.index <= 1 } />
        <TabItemText>Home</TabItemText>
      </TabItem>

      <TabItem onPress={ () => goTo('ChatRoom') }>
        <IconTab name="comment-alt" size={24} isChecked={ state.index === 2 } />
        <TabItemText>Chat</TabItemText>
      </TabItem>

      <TabItem onPress={ () => goTo('Notifications') }>
        <IconTab name="bolt" size={24} isChecked={ state.index === 3 } />
        <TabItemText>Notifications</TabItemText>
      </TabItem>

      <TabItem onPress={ () => goTo('More') }>
        <IconTab name="bars" size={24} isChecked={ state.index === 4 } />
        <TabItemText>More</TabItemText>
      </TabItem>
    </TabArea>
  );
};

export default TabBottomNavigate;

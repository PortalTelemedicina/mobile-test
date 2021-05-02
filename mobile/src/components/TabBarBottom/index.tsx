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
        <IconTab name="home" size={24} isChecked={ state.index === 0 } />
        <TabItemText>Home</TabItemText>
      </TabItem>

      <TabItem onPress={ () => goTo('Specialists') }>
        <IconTab name="comment-alt" size={24} isChecked={ state.index === 1 } />
        <TabItemText>Chat</TabItemText>
      </TabItem>

      <TabItem onPress={ () => {} }>
        <IconTab name="bolt" size={24} isChecked={ state.index === 2 } />
        <TabItemText>Notifications</TabItemText>
      </TabItem>

      <TabItem onPress={ () => {} }>
        <IconTab name="bars" size={24} isChecked={ state.index === 3 } />
        <TabItemText>More</TabItemText>
      </TabItem>
    </TabArea>
  );
};

export default TabBottomNavigate;

import React from 'react';

import TabBarIcon from './TabBarIcon';

import { BottomBar, BottomBarItem, BottomBarPressable } from './tabBar.styles';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <BottomBar>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };


        return (
          <BottomBarItem key={route.key}>
            <BottomBarPressable
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
            >
              <TabBarIcon screen={route.name} isSelected={isFocused} />
            </BottomBarPressable>
          </BottomBarItem>
        );
      })}
    </BottomBar>
  );
}

export default TabBar;

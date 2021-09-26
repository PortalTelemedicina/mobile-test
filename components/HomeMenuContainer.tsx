import React from 'react';
import { View, StyleSheet } from 'react-native';

import { systemI18n, systemColors, systemLayout } from '../system';

import { TextContainer as Text } from './TextContainer';
import IconContainer from './IconContainer';

export default function HomeMenuContainer(): JSX.Element {
  return (
    <View style={styles.homeMenuContainer}>
      <HomeMenuItem title="diagnostic" icon="pulse" selected />
      <HomeMenuItem title="consultation" icon="account-arrow-left-outline" />
      <HomeMenuItem title="nurse" icon="doctor" />
      <HomeMenuItem title="ambulance" icon="ambulance" />
      <HomeMenuItem title="labWork" icon="flask-outline" />
      <HomeMenuItem title="medicine" icon="bottle-tonic-plus-outline" />
    </View>
  );
}

function HomeMenuItem({ title, icon, selected }: { title: string; icon: any; selected?: boolean }) {
  return (
    <View style={[styles.homeMenuItem, selected ? styles.homeMenuItemSelected : null]}>
      <View>
        <IconContainer
          name={icon}
          size={50}
          color={selected ? systemColors.light : systemColors.brown}
          style={styles.homeMenuItemIcon}
        />
      </View>
      <Text style={selected ? styles.homeMenuItemTitleSelected : styles.homeMenuItemTitle}>
        {systemI18n.t(`menu.${title}`)}
      </Text>
    </View>
  );
}

HomeMenuItem.defaultProps = { selected: false };

const styles = StyleSheet.create({
  homeMenuContainer: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeMenuItem: {
    margin: '1%',
    aspectRatio: 1,
    width: systemLayout.window.width / 3.5,
    height: systemLayout.window.width / 3.5,
    backgroundColor: systemColors.light,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  homeMenuItemSelected: {
    backgroundColor: systemColors.brown,
  },
  homeMenuItemTitle: {
    color: systemColors.brown,
    textAlign: 'center',
  },
  homeMenuItemTitleSelected: {
    color: systemColors.light,
    textAlign: 'center',
  },
  homeMenuItemIcon: {
    textAlign: 'center',
  },
});

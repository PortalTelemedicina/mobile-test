import {Divider, Layout, ListItem, Toggle} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useAppTheme} from '../../shared/state/theme-context';

export const SimpleToggle = () => {
  const {toggleTheme, darkMode} = useAppTheme();
  const onCheckedChange = isChecked => {
    toggleTheme(isChecked);
  };
  return <Toggle checked={darkMode} onChange={onCheckedChange} />;
};

const Menu = ({}) => {
  return (
    <Layout level="1" style={styles.container}>
      <ListItem title="Dark Mode" accessoryRight={SimpleToggle} />
      <Divider />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Menu;

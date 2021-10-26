import {QuickAction} from '@/app/domain/entities';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import QuickActionIcon from './quick-action-icon';

export type QuickActionCardProps = {
  action?: QuickAction;
  onPress?: () => void;
  loading?: boolean;
};

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  action,
  onPress = () => {},
  loading = true,
}) => {
  const theme = useTheme();

  if (loading || !action) {
    return (
      <Layout testID="container-loading" style={[styles.container]} level="3">
        <Layout level="4" testID="view-icon" style={styles.iconLoading} />
        <Layout level="4" style={styles.textLoading} />
      </Layout>
    );
  }

  const iconColor = action.active
    ? theme['text-alternate-color']
    : theme['text-hint-color'];
  const buttonColor = action.active
    ? theme['color-primary-active']
    : theme['color-primary-disabled'];

  const textColor = action.active
    ? theme['text-alternate-color']
    : theme['text-hint-color'];

  return (
    <TouchableOpacity
      activeOpacity={0.55}
      testID={`action-${action.title}`}
      disabled={!action.active}
      onPress={onPress}
      style={styles.wrapper}
    >
      <Layout
        style={[
          styles.container,
          {
            backgroundColor: buttonColor,
          },
        ]}
      >
        {action.icon && <QuickActionIcon color={iconColor} action={action} />}
        <Text
          style={[
            styles.title,
            {
              color: textColor,
            },
          ]}
          category="s2"
        >
          {action.title}
        </Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default QuickActionCard;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
  },
  iconLoading: {
    width: '45%',
    height: '45%',
    borderRadius: 10,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {width: '95%', height: '20%', marginTop: 10, borderRadius: 6},
});

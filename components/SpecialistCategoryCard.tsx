import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { systemI18n, systemColors, systemLayout, systemConfig } from '../system';

import { ISpecialistCategory } from '../store/specialistCategory/specialistCategoryTypes';

import { TextContainer as Text } from './TextContainer';
import IconContainer from './IconContainer';

export default function SpecialistCategoryCard({
  specialistCategory,
  onSelectCategory,
  index,
}: {
  specialistCategory: ISpecialistCategory;
  onSelectCategory: any;
  index: number;
}): JSX.Element {
  const { name, color, total } = specialistCategory;
  return (
    <TouchableOpacity onPress={() => onSelectCategory(name)} testID={`specialist-category-${index}`}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <View style={styles.cardIconContainer}>
          <IconContainer
            name={systemConfig.getIconNameBySpecialistCategory(name)}
            size={50}
            color={color}
            style={styles.cardIcon}
          />
        </View>
        <Text style={styles.cardTitle} bold>
          {name}
        </Text>
        <Text style={styles.cardSubtitle}>{systemI18n.t('label.totalDoctors', { total })}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: systemLayout.window.height / 4.5,
    width: systemLayout.window.width / 3,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  cardIconContainer: {
    backgroundColor: systemColors.white,
    borderRadius: 10,
    width: '50%',
  },
  cardIcon: {
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: systemColors.white,
    paddingTop: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: systemColors.white,
    paddingTop: 5,
  },
});

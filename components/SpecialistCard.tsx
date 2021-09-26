import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';

import { systemI18n, systemColors, systemLayout } from '../system';
import { ISpecialist } from '../store/specialist/specialistTypes';
import { TextContainer as Text } from './TextContainer';
import ButtonContainer from './ButtonContainer';

export default function SpecialistCard({ specialist, index }: { specialist: ISpecialist; index: number }): JSX.Element {
  const { name, distance, description, actions } = specialist;

  const getRandomColor = () => `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`;

  const getNameAlias = () => {
    const arrayName = name.split(' ');
    const firstWord = arrayName[0].charAt(0);
    const secondWord = arrayName.length > 1 ? arrayName[1].charAt(0) : arrayName[0].charAt(1);
    return `${firstWord}${secondWord}`.toUpperCase();
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <View style={[styles.cardCircleContainer, { backgroundColor: getRandomColor() }]}>
          <Text style={styles.cardCircle}>{getNameAlias()}</Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardName} bold testID={`specialist-${index}`}>
          {name}
        </Text>
        {distance && <Text style={styles.cardDistance}>{systemI18n.t('label.nearByKm', { distance })}</Text>}
        <Text style={styles.cardDescription}>{description}</Text>
        <View style={styles.cardButtons}>
          <ButtonContainer title="btn.chat" onPress={() => Linking.openURL(actions?.chat)} style={styles.cardButton} />
          <ButtonContainer
            title="btn.call"
            onPress={() => Linking.openURL(`tel:${actions?.call}`)}
            style={styles.cardButton}
            secundary
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  cardLeft: {
    flex: 0.18,
    borderRadius: 25,
  },
  cardRight: {
    flex: 0.82,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  cardDistance: {
    fontSize: 12,
    paddingBottom: 7,
    color: systemColors.grayLight,
  },
  cardDescription: {
    fontSize: 14,
    paddingBottom: 15,
  },
  cardCircleContainer: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  cardCircle: {
    color: '#FFF',
    lineHeight: 50,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardButtons: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  cardButton: {
    width: systemLayout.window.width / 3.5,
    marginRight: 10,
  },
});

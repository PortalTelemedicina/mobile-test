import React, { useState, useEffect } from 'react';
import { Text, View, Linking } from 'react-native';

import styles from './styles';
import StyledButton from '../../buttons/styledButton';
import theme from '../../../theme';

export default function ItemSpecialist({ data }) {
  const specialist = data.item;
  const {
    white,
    purple,
    pink,
    yellow,
    red,
    darkslategray,
    opacityPurple,
    opacityPink,
    opacityYellow,
    opacityRed,
  } = theme.colors;
  const [profileColor, setProfileColor] = useState({ background: opacityPurple, text: purple });
  const profileColors = [
    { background: opacityPurple, text: purple },
    { background: opacityPink, text: pink },
    { background: opacityYellow, text: yellow },
    { background: opacityRed, text: red },
  ];

  useEffect(() => {
    setProfileColor(randomColor());
  }, []);

  function randomColor(){
    const colorIndex = Math.floor(Math.random() * (4 - 0)) + 0;
    console.log('index color', colorIndex);
    return profileColors[colorIndex];
  }

  return (
    <View style={styles.container}>
      <View style={[styles.profile, {backgroundColor: profileColor.background }]}>
        <Text style={[styles.textProfile, {color: profileColor.text}]}>{specialist.name.charAt(0)}</Text>
      </View>
      <View>
        <Text style={styles.name}>{specialist.name}</Text>
        <Text style={styles.distance}>Neraby {specialist.distance} miles</Text>
        <Text style={styles.description}>{specialist.description}</Text>
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <StyledButton
              buttonColor={purple}
              textColor={white}
              title={'Chat'}
              btnFn={() => Linking.openURL(specialist.actions.chat)}
            />
          </View>
          {!specialist.actions?.call && (
            <View style={styles.button}>
              <StyledButton
                buttonColor={white}
                textColor={darkslategray}
                title={'Call'}
                btnFn={() => Linking.openURL(`tel:${specialist.actions.call}`)}
              />
            </View>
          )
          }
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
}

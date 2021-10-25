import {MedicalSpecialties} from '@/app/domain/entities';
import {SharedI18n, translate} from '@/config/locale';
import {convertHexToRgb} from '@/utils';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

export type MedicalSpecialtyCardProps = {
  medicalSpecialty?: MedicalSpecialties;
  onPress?: () => void;
  loading?: boolean;
};

const MedicalSpecialtyCard: React.FC<MedicalSpecialtyCardProps> = ({
  medicalSpecialty,
  onPress = () => {},
  loading = true,
}) => {
  const theme = useTheme();

  if (loading || !medicalSpecialty) {
    return (
      <Layout testID="view-card-loading" style={[styles.container]} level="3">
        <Layout level="4" testID="view-icon" style={[styles.iconContainer]} />
        <View style={styles.content}>
          <Layout level="4" style={styles.textLoading} />
          <Layout level="4" style={styles.doctorsLoading} />
        </View>
      </Layout>
    );
  }

  const {name, color, amountAvailable, image} = medicalSpecialty;

  return (
    <TouchableOpacity
      activeOpacity={0.55}
      style={styles.wrapper}
      testID="touchable"
      onPress={onPress}
    >
      <View
        testID={`medicalspecialty-${name}`}
        style={[styles.container, {backgroundColor: color}]}
      >
        {image && (
          <Layout
            testID="view-icon"
            style={[
              styles.iconContainer,
              {
                backgroundColor: convertHexToRgb({
                  hex: theme['background-basic-color-1'],
                  alpha: 0.75,
                }),
              },
            ]}
          >
            <SvgUri
              testID={`icon-${image}`}
              fill={color}
              width="75%"
              height="75%"
              uri={image}
            />
          </Layout>
        )}
        <View style={styles.content}>
          <Text
            category="h6"
            style={[styles.title, {color: theme['background-basic-color-1']}]}
          >
            {name}
          </Text>
          <Text
            testID="amount"
            category="s2"
            style={[
              styles.amountAvailable,
              {color: theme['background-basic-color-1']},
            ]}
          >
            {amountAvailable} {translate(SharedI18n.doctors)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MedicalSpecialtyCard;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    aspectRatio: 1,
  },
  iconContainer: {
    width: '40%',
    height: '40%',
    borderRadius: 10,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {flex: 3},
  title: {
    marginTop: 10,
  },
  amountAvailable: {
    marginTop: 5,
  },
  textLoading: {width: '95%', height: '40%', marginTop: 10, borderRadius: 6},
  doctorsLoading: {width: '60%', height: '28%', marginTop: 5, borderRadius: 6},
});

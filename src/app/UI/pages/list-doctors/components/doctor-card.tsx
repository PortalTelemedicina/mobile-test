import {Doctor} from '@/app/domain/entities';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';

type DoctorCardProps = {
  doctor?: Doctor;
  loading?: boolean;
};

const DoctorCard: React.FC<DoctorCardProps> = ({doctor, loading = true}) => {
  if (loading || !doctor) {
    return (
      <Layout testID="view-card-loading" style={[styles.containerLoading]}>
        <Layout
          level="4"
          testID="view-icon"
          style={[styles.iconContainerLoading]}
        />
        <View style={styles.content}>
          <Layout level="4" style={styles.textLoading} />
          <Layout level="4" style={styles.doctorsLoading} />
          <Layout level="4" style={styles.doctorsLoading2} />
        </View>
      </Layout>
    );
  }
  return (
    <View style={styles.container}>
      <UserAvatar style={styles.userAvatar} name={doctor.name} />
      <View style={styles.content}>
        <Text category="h6">{doctor.name}</Text>
        {doctor.distance && (
          <Text category="s1" style={styles.distance}>
            Nearly {doctor.distance} miles
          </Text>
        )}
        <Text style={styles.information}>{doctor.description}</Text>
        {doctor.actions && (
          <View style={styles.buttonsContainer}>
            {doctor.actions.chat && (
              <Button
                accessoryLeft={props => (
                  <Icon {...props} name="message-square-outline" />
                )}
                size="small"
                appearance="outline"
                style={styles.firstButton}
              >
                Chat
              </Button>
            )}
            {doctor.actions.call && (
              <Button
                accessoryLeft={props => (
                  <Icon {...props} name="phone-outline" />
                )}
                size="small"
                appearance="outline"
                style={styles.secondButton}
              >
                Call
              </Button>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {marginTop: 30, flexDirection: 'row'},
  containerLoading: {
    marginTop: 30,
    flexDirection: 'row',
    flex: 1,
    maxHeight: '20%',
  },
  userAvatar: {width: '15%', aspectRatio: 1, borderRadius: 100},
  content: {flex: 1, paddingHorizontal: 15},
  distance: {marginTop: 5},
  information: {marginTop: 5},
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  firstButton: {flex: 1, maxWidth: '50%'},
  secondButton: {flex: 1, maxWidth: '50%', marginLeft: 15},
  iconContainer: {
    width: '20%',
    height: '20%',
    borderRadius: 100,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerLoading: {
    width: '20%',
    height: '20%',
    borderRadius: 100,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {width: '95%', height: '30%', marginTop: 10, borderRadius: 6},
  doctorsLoading: {width: '60%', height: '25%', marginTop: 5, borderRadius: 6},
  doctorsLoading2: {width: '80%', height: '25%', marginTop: 5, borderRadius: 6},
});

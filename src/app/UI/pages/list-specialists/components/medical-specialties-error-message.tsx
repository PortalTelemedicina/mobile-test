import {InternetConnectionIcon} from '@/assets/icons';
import {SharedI18n, translate} from '@/config/locale';
import {Button, Icon, Text, useTheme, Spinner} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export type MedicalSpecialtiesErrorMessageProps = {
  message?: string;
  refreshFn?: () => Promise<void>;
  loading?: boolean;
};

const MedicalSpecialtiesErrorMessage: React.FC<MedicalSpecialtiesErrorMessageProps> =
  ({message, refreshFn = () => {}, loading = true}) => {
    const theme = useTheme();

    return (
      <View testID="view-internet-error" style={styles.container}>
        <InternetConnectionIcon
          fill={theme['text-basic-color']}
          testID={'error-internet'}
          width="38%"
          height="38%"
        />
        <View style={styles.messageContainer}>
          <Text category="h6">Ops!</Text>
          <Text style={styles.errorText}>{message}</Text>
          <Button
            testID="btn-tryagain"
            disabled={loading}
            accessoryLeft={
              !loading
                ? props => <Icon {...props} name="refresh-outline" />
                : null
            }
            appearance="outline"
            size="small"
            style={styles.button}
            onPress={refreshFn}
          >
            {loading
              ? () => (
                  <Spinner
                    testID="loading"
                    size="tiny"
                    style={{borderColor: theme['text-hint-color']}}
                  />
                )
              : translate(SharedI18n.tryAgain)}
          </Button>
        </View>
      </View>
    );
  };

export default MedicalSpecialtiesErrorMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  messageContainer: {
    flex: 1,
  },
  errorText: {width: '90%', marginTop: 5},
  button: {marginTop: 15},
});

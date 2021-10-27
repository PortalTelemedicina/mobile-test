import {InternetConnectionIcon} from '@/assets/icons';
import {SharedI18n, translate} from '@/config/locale';
import {
  Button,
  Icon,
  Layout,
  Spinner,
  Text,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {styles} from '../list-doctors';

type ListDoctorsErrorProps = {
  message: string;
  loading: boolean;
  refreshFn: () => Promise<void>;
};

const ListDoctorsError: React.FC<ListDoctorsErrorProps> = ({
  message,
  loading,
  refreshFn,
}) => {
  const theme = useTheme();
  return (
    <View style={[styles.errorContainer]}>
      <InternetConnectionIcon
        fill={theme['text-basic-color']}
        testID={'error-internet'}
        width="46%"
        height="46%"
      />
      <Text style={styles.errorText} category="h5" appearance="hint">
        {message}
      </Text>
      <Button
        testID="btn-tryagain"
        disabled={loading}
        accessoryLeft={
          !loading ? props => <Icon {...props} name="refresh-outline" /> : null
        }
        appearance="outline"
        size="small"
        style={styles.refreshButton}
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
  );
};

export default ListDoctorsError;

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import store from './store';

import Routes from './routes';
import Home from './pages/Home';

const App = (): JSX.Element => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <Home /> */}
      <Routes />
    </View>
  </Provider>
);

export default App;

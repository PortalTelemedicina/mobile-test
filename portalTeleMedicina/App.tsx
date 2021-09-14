import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import '@config/ReactotronConfig';

import Navigator from '@navigator';

import { persistor, store } from '@store';

import theme from '@themes/theme'


const App = () => {
  return (
     <Provider store={store}>
       <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import Router from '~/routes'

import store from './store'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App

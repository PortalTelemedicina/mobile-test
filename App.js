/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StyleSheet } from 'react-native';

import Routes from "./src/routes";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

const App: () => Node = () => {
  return (
    <Routes/>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 
 * @flow strict-local
 */

import React from 'react';
import { Platform,SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';


const App: () => React$Node = () => {
  
  return (
    <>
    
    <StatusBar  translucent backgroundColor="transparent" barStyle={'dark-content'}  />
    <Router />
    </>

  );
};



export default App;

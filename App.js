import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { reducer } from './src/reducers/reducer';

const store = createStore(reducer);


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor="#2F3C7E" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
    </Provider>
    
  );
}


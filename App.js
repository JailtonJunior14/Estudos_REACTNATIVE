import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

//aqui so configuramos q vai aparecer a primeira pagina configurada na pasta routes, no caso o /routes

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="red" barStyle="light-content"/>
       <Routes/> 
    </NavigationContainer>
  );
}
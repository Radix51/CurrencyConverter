import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Импортируем компонент HomeScreen
import ConverterScreen from './screens/ConverterScreen'; // Импортируем компонент ConverterScreen
import InfoScreen from './screens/InfoScreen'; // Импортируем компонент InfoScreen

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: 'Конвертер валют',
          headerStyle: {
            backgroundColor: '#42aaff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Menlo', // Добавление шрифта
          },
        }} 
      />
      <Stack.Screen 
        name="Converter" 
        component={ConverterScreen} 
        options={{ 
          title: 'Конвертер валют',
          headerStyle: {
            backgroundColor: '#42aaff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Menlo', // Добавление шрифта
          },
        }} 
      />
      <Stack.Screen 
        name="Info" 
        component={InfoScreen} 
        options={{ 
          title: 'О приложении',
          headerStyle: {
            backgroundColor: '#42aaff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Menlo', // Добавление шрифта
          },
        }} 
      />
    </Stack.Navigator>
  );
};

export default Navigation;

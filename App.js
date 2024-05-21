import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation'; // Проверьте, что путь к файлу Navigation.js указан правильно

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;




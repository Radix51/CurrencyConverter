import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Checkbox } from '@react-native-community/checkbox'; // Импортируем Checkbox из нового пакета

const ConvertButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Конвертировать</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#42aaff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Menlo', // Применяем шрифт для кода
  },
});

export default ConvertButton;



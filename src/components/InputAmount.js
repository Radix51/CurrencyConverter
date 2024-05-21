import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const InputAmount = ({ value, onChangeAmount, onReset }) => {
  const [amount, setAmount] = useState(value);

  const handleAmountChange = (text) => {
    setAmount(text);
    onChangeAmount(text);
  };

  const handleReset = () => {
    setAmount('');
    onChangeAmount(''); // Сбросить поле ввода
    onReset(); // Вызвать функцию обратного вызова для дополнительных действий
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { fontFamily: 'Menlo' }]} // Добавляем fontFamily к стилю input
        placeholder="Введите сумму"
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
      />
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={[styles.resetButtonText, { fontFamily: 'Menlo' }]}>Сбросить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#42aaff',
    borderRadius: 5,
    padding: 10,
  },
  resetButton: {
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#42aaff', // Красный цвет фона
    borderRadius: 5,
    padding: 10,
  },
  resetButtonText: {
    color: 'black', // Черный текст
  },
});

export default InputAmount;










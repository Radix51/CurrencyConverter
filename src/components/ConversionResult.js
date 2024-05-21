import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConversionResult = ({ amount, fromCurrency, toCurrency, convertedAmount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  resultText: {
    fontSize: 18,
    fontFamily: 'Menlo', // Применяем шрифт для кода
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default ConversionResult;




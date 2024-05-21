import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Импортируем Picker из нового пакета

const CurrencyPicker = ({ currencies, selectedCurrency, onSelectCurrency }) => {
  const [selectedValue, setSelectedValue] = useState(selectedCurrency);

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    onSelectCurrency(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontFamily: 'Menlo' }]}>Выберите валюту:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={handleValueChange}
      >
        {currencies.map(currency => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#42aaff',
    borderRadius: 5,
    fontFamily: 'Menlo', // Добавляем fontFamily к стилю picker
  },
});

export default CurrencyPicker;



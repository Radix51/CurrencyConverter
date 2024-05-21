import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Text, ScrollView } from 'react-native';
import InputAmount from '../components/InputAmount';
import CurrencyPicker from '../components/CurrencyPicker';
import ConvertButton from '../components/ConvertButton';
import ConversionResult from '../components/ConversionResult';
import axios from 'axios';

const ConverterScreen = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('RUB');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const data = response.data;
        setCurrencies(Object.keys(data.rates));
      } catch (error) {
        setError('Не удалось получить доступ к валютам');
      }
    };

    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (!fromCurrency || !toCurrency || !amount) {
      setError('Укажите количество валюты');
      return;
    }

    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = response.data;
      const rate = data.rates[toCurrency];
      const result = parseFloat(amount) * rate;
      setConvertedAmount(result.toFixed(2).toString());
      setError('');
    } catch (error) {
      setError('Не удалось конвертировать валюту');
    }
  };

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handleFromCurrencyChange = (currency) => {
    setFromCurrency(currency);
  };

  const handleToCurrencyChange = (currency) => {
    setToCurrency(currency);
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const handleReset = () => {
    // Сбросить состояние до стандартных значений
    setAmount('');
    setConvertedAmount(null);
    setError('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={[styles.container, { backgroundColor: '#77a1b5' }]}>
          <InputAmount
            value={amount}
            onChangeAmount={handleAmountChange}
            onReset={handleReset}
          />
          <View style={styles.currencyPickersContainer}>
            <CurrencyPicker
              currencies={currencies}
              selectedCurrency={fromCurrency}
              onSelectCurrency={handleFromCurrencyChange}
            />
            <CurrencyPicker
              currencies={currencies}
              selectedCurrency={toCurrency}
              onSelectCurrency={handleToCurrencyChange}
            />
          </View>
          <ConvertButton onPress={convertCurrency} />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          {convertedAmount ? (
            <ConversionResult
              amount={amount}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              convertedAmount={convertedAmount}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%', // Ширина контейнера на всю доступную ширину
    backgroundColor: '#77a1b5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  currencyPickersContainer: {
    flexDirection: 'row', // Отображать компоненты в горизонтальном направлении
    justifyContent: 'space-between', // Равномерное распределение пространства между компонентами
    width: '100%', // Ширина контейнера на всю доступную ширину
    marginBottom: 10, // Добавляем небольшое пространство между компонентами
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});


export default ConverterScreen;


















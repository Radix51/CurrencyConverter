import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>О приложении</Text>
      <Text style={styles.content}>
        CurrencyConverter - это приложение для конвертации валют из одной в другую. Актуальные данные о валютах в режиме реального времени берются по API. Приложение обладает большим списком конвертируемых валют.
      </Text>
      <Text style={styles.content}>
        Разработчик: Даниил Лоза
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#77a1b5', // Используем тот же фон, что и на главной странице
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Menlo', // Используем тот же шрифт, что и на главной странице
    color: '#000000', // Цвет текста
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Menlo', // Используем тот же шрифт, что и на главной странице
    color: '#000000', // Цвет текста
  },
});

export default InfoScreen;

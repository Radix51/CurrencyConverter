import React from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet, BackHandler } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Действия при нажатии на кнопку "Выход"
    BackHandler.exitApp(); // Закрыть приложение
  };

  return (
    <View style={[styles.container, { backgroundColor: '#77a1b5' }]}>
      <Image
        source={require('../components/logo.jpg')} // Путь к изображению логотипа
        style={styles.logo} // Стили для изображения
        onError={() => console.log('Ошибка загрузки изображения')}
      />
  
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#42aaff' }]}
        onPress={() => {
          navigation.navigate('Converter');
        }}
      >
        <Text style={styles.buttonText}>Конвертер валют</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#42aaff' }]}
        onPress={() => {
          navigation.navigate('Info');
        }}
      >
        <Text style={styles.buttonText}>О приложении</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#42aaff' }]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Выход</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Ширина изображения логотипа
    height: 200, // Высота изображения логотипа
    marginBottom: 20, // Отступ снизу
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Menlo',
    textAlign: 'center',
  },
});

export default HomeScreen;

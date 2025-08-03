import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const OnboardingScreen: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar: logo */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>FootHost</Text>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <Text style={styles.mainTitle}>
          {`ФУТБОЛ ДЛЯ ВСЕХ
НАЙДИ ПОЛЕ И
ИГРАЙ!`}
        </Text>
        
        <Text style={styles.subtitle}>
          Добро пожаловать в FootHost! Найдите идеальное поле для игры в футбол.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>Войти</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.registerButton]}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerButtonText}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#45AF31',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 64,
    lineHeight: 56,
    color: '#000',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  loginButton: {
    backgroundColor: '#45AF31',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#45AF31',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  registerButtonText: {
    color: '#45AF31',
    fontSize: 16,
    fontWeight: '600',
  },
});

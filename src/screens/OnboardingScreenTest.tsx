import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { Container, LoginButton, RegisterButton } from '../components/common';

const { width, height } = Dimensions.get('window');

export const OnboardingScreenTest: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Container padding="sm" className="flex-1">
        {/* Top bar: logo text */}
        <View className="flex-row justify-between items-center pt-8">
          <View className="flex-row items-center">
            <Text className="text-2xl font-bold text-primary">FootHost</Text>
          </View>
        </View>

        {/* Main content */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-4xl font-bold mb-6 text-center leading-tight">
            ФУТБОЛ ДЛЯ ВСЕХ
          </Text>
          <Text className="text-xl font-bold mb-4 text-center">
            НАЙДИ ПОЛЕ И ИГРАЙ!
          </Text>
          <Text className="text-base mb-8 text-center opacity-70 px-4">
            Зови друзей, выбирай время и выходи на матч!
          </Text>
          
          <View className="w-full px-6">
            <LoginButton
              onPress={() => navigation.navigate('Login')}
            />
            <RegisterButton
              onPress={() => navigation.navigate('Register')}
              className="mt-4"
            />
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Button } from '../components/common';

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

export const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/400x600/4CAF50/FFFFFF?text=Football+Player' }}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 bg-white/95">
          <View className="items-start px-6 pt-8">
            <View className="flex-row items-center">
              <Text className="text-lg font-bold text-primary">FOOT</Text>
              <Text className="text-sm font-bold text-primary ml-1">HOST</Text>
            </View>
          </View>
          
          <View className="flex-1 justify-center px-6">
            <Text className="text-4xl font-bold text-text-primary mb-4 leading-tight">
              {`ФУТБОЛ ДЛЯ ВСЕХ\nНАЙДИ ПОЛЕ И\nИГРАЙ!`}
            </Text>
            <Text className="text-base text-text-secondary mb-16 leading-relaxed">
              {`Зови друзей, выбирай время и\nвыходи на матч!`}
            </Text>
            
            <View className="gap-4">
              <Button
                title="LOGIN"
                onPress={() => navigation.navigate('Login')}
                variant="primary"
              />
              <Button
                title="ЗАРЕГИСТРИРОВАТЬСЯ"
                onPress={() => navigation.navigate('Register')}
                variant="outline"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}; 
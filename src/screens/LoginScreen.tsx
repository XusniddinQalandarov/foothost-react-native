import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Button, Input } from '../components/common';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    
    // Mock authentication
    setTimeout(() => {
      setLoading(false);
      
      if (formData.username === 'user' && formData.password === 'user') {
        // Successful login
        navigation.navigate('Main');
      } else {
        // Failed login
        Alert.alert(
          'Login Failed',
          'Invalid username or password. Please use username: "user" and password: "user"',
          [{ text: 'OK' }]
        );
      }
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="px-6 pt-4 pb-6">
        <View className="flex-row items-center">
          <Text className="text-lg font-bold text-white">FOOT</Text>
          <Text className="text-sm font-bold text-white ml-1">HOST</Text>
        </View>
      </View>

      <View className="flex-1 bg-white rounded-t-3xl px-6 pt-8">
        <Text className="text-xl font-bold text-text-primary text-center mb-8 leading-relaxed">
          ВОЙДИТЕ, ИСПОЛЬЗУЯ ВАШ ЛОГИН И ПАРОЛЬ
        </Text>

        <View className="flex-1">
          <Input
            placeholder="Username"
            value={formData.username}
            onChangeText={(text) =>
              setFormData({ ...formData, username: text })
            }
            autoCapitalize="none"
          />

          <Input
            placeholder="Password"
            value={formData.password}
            onChangeText={(text) =>
              setFormData({ ...formData, password: text })
            }
            secureTextEntry
          />

          <TouchableOpacity className="self-end mb-8">
            <Text className="text-sm text-text-secondary">Забыли пароль?</Text>
          </TouchableOpacity>

          <Button
            title="ВОЙТИ"
            onPress={handleLogin}
            loading={loading}
          />

          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="text-sm text-text-secondary mx-4">OR</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          <TouchableOpacity 
            className="items-center py-4"
            onPress={() => navigation.navigate('Register')}
          >
            <Text className="text-base font-semibold text-primary">ЗАРЕГИСТРИРОВАТЬСЯ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}; 
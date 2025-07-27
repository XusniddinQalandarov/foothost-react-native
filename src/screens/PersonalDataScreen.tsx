import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Input } from '../components/common';

type PersonalDataScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PersonalData'
>;

interface Props {
  navigation: PersonalDataScreenNavigationProp;
}

const mockUserData = {
  name: 'Шукур Гайнутдинов',
  phone: '+7(702) 517-11-98',
  city: 'Tashkent',
  about: 'Заполнить',
};

export const PersonalDataScreen: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: mockUserData.name,
    phone: mockUserData.phone,
    city: mockUserData.city,
    about: mockUserData.about,
  });

  const handleSave = () => {
    // Handle save logic here
    navigation.goBack();
  };

  const handleSignOut = () => {
    Alert.alert(
      'Выйти из аккаунта',
      'Вы уверены, что хотите выйти?',
      [
        { text: 'Отмена', style: 'cancel' },
        { 
          text: 'Выйти', 
          style: 'destructive',
          onPress: () => {
            // Clear any stored user data here
            navigation.navigate('Onboarding');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#212121" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-text-primary">Личный данные</Text>
        <View className="w-6" />
      </View>

      <View className="flex-1 px-6 pt-6">
        {/* Profile Picture */}
        <View className="items-center mb-8">
          <View className="relative">
            <View className="w-24 h-24 bg-gray-300 rounded-full items-center justify-center">
              <MaterialCommunityIcons name="account" size={48} color="#757575" />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-primary rounded-full p-2">
              <MaterialCommunityIcons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Fields */}
        <View className="space-y-4">
          <TouchableOpacity className="bg-white rounded-lg p-4 flex-row items-center justify-between">
            <Text className="text-base text-text-primary">{formData.name}</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-lg p-4 flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-text-secondary mb-1">Номер телефона</Text>
              <Text className="text-base text-text-primary">{formData.phone}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-lg p-4 flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-text-secondary mb-1">Город</Text>
              <Text className="text-base text-text-primary">{formData.city}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-lg p-4 flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-text-secondary mb-1">О себе</Text>
              <Text className="text-base text-text-primary">{formData.about}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          className="bg-primary rounded-lg py-4 mt-6"
          onPress={handleSave}
        >
          <Text className="text-white text-center text-lg font-bold">Сохранить</Text>
        </TouchableOpacity>

        {/* Sign Out Button */}
        <TouchableOpacity 
          className="bg-red-500 rounded-lg py-4 mt-4"
          onPress={handleSignOut}
        >
          <Text className="text-white text-center text-lg font-bold">Выйти из аккаунта</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}; 
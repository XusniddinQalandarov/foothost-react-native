import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Header } from '../components/common';
import CameraSvg from '../../assets/images/profile/camera.svg';

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

  const handleAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <Header
        left={
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <MaterialCommunityIcons name="arrow-left" size={28} color="#212121" />
          </TouchableOpacity>
        }
        title="ЛИЧНЫЕ ДАННЫЕ"
      />

      <View className="flex-1 px-6 pt-6">
        {/* Profile Picture - same as ProfileScreen */}
        <View className="items-center mb-8">
          <View className="w-32 h-32 rounded-full bg-white items-center justify-center border-4 border-primary" style={{ elevation: 4 }}>
            <View className="w-28 h-28 bg-gray-300 rounded-full items-center justify-center relative">
              <MaterialCommunityIcons name="account" size={64} color="#757575" />
              <TouchableOpacity className="absolute inset-0 items-center justify-center w-full h-full">
                <CameraSvg width={38} height={38} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Name Field - Separate */}
        <TouchableOpacity className="bg-white rounded-lg p-4 flex-row items-center justify-between border border-gray-200 mb-4">
          <Text className="text-base text-text-primary">{formData.name}</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
        </TouchableOpacity>

        {/* Grouped Fields - Phone, City, About Me */}
        <View className="bg-white rounded-lg border border-gray-200 mb-4">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <Text className="text-base text-text-primary">Номер телефона</Text>
            <View className="flex-row items-center">
              <Text className="text-base text-gray-500 mr-2">{formData.phone}</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <Text className="text-base text-text-primary">Город</Text>
            <View className="flex-row items-center">
              <Text className="text-base text-gray-500 mr-2">{formData.city}</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <Text className="text-base text-text-primary">О себе</Text>
            <View className="flex-row items-center">
              <Text className="text-base text-gray-500 mr-2">{formData.about}</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
            </View>
          </TouchableOpacity>
        </View>

        {/* About Us Section */}
        <TouchableOpacity 
          className="bg-white rounded-lg p-4 flex-row items-center justify-between border border-gray-200"
          onPress={handleAboutUs}
        >
          <Text className="text-base text-text-primary">О НАС</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
        </TouchableOpacity>

        {/* Save Button - at the bottom */}
        <View className="flex-1 justify-end pb-6">
          <TouchableOpacity 
            className="bg-primary rounded-lg py-4"
            onPress={handleSave}
          >
            <Text className="text-white text-center text-lg font-bold">Сохранить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}; 
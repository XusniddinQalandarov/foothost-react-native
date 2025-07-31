import React from 'react';
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

type AboutUsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AboutUs'
>;

interface Props {
  navigation: AboutUsScreenNavigationProp;
}

const aboutLinks = [
  { id: 1, title: 'Contract offer', icon: 'file-document-outline' },
  { id: 2, title: 'Privacy policy', icon: 'shield-check-outline' },
  { id: 3, title: 'Connect with us', icon: 'message-outline' },
];

export const AboutUsScreen: React.FC<Props> = ({ navigation }) => {
  const handleLinkPress = (linkId: number) => {
    // Handle different link actions
    switch (linkId) {
      case 1:
        // Open contract offer
        break;
      case 2:
        // Open privacy policy
        break;
      case 3:
        // Open contact form
        break;
    }
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
        title="О НАС"
      />

      <View className="flex-1 px-6 pt-6">
        {/* Grouped Fields Block */}
        <View className="bg-white rounded-lg border border-gray-200 mb-4">
          <TouchableOpacity 
            className="flex-row items-center justify-between p-4 border-b border-gray-100"
            onPress={() => handleLinkPress(1)}
          >
            <Text className="text-base text-text-primary">Contract offer</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-row items-center justify-between p-4 border-b border-gray-100"
            onPress={() => handleLinkPress(2)}
          >
            <Text className="text-base text-text-primary">Privacy policy</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-row items-center justify-between p-4"
            onPress={() => handleLinkPress(3)}
          >
            <Text className="text-base text-text-primary">Connect with us</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>
        </View>

        {/* Copyright Text - at the bottom */}
        <View className="flex-1 justify-end pb-6">
          <View className="bg-white rounded-lg p-6 border border-gray-200">
            <Text className="text-lg font-bold text-text-primary mb-4">FOOT HOST</Text>
            <Text className="text-sm text-text-secondary mb-2">
              Версия приложения: 1.0.0
            </Text>
            <Text className="text-sm text-text-secondary mb-2">
              © 2024 Foot Host. Все права защищены.
            </Text>
            <Text className="text-sm text-text-secondary">
              Приложение для поиска и бронирования футбольных полей в Ташкенте.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}; 
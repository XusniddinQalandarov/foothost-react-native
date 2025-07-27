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
    <SafeAreaView className="flex-1 bg-background-default">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#212121" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-text-primary">О НАС</Text>
        <View className="w-6" />
      </View>

      <View className="flex-1 px-6 pt-6">
        {/* About Links */}
        <View className="space-y-4">
          {aboutLinks.map((link) => (
            <TouchableOpacity 
              key={link.id}
              className="bg-white rounded-lg p-4 flex-row items-center justify-between"
              onPress={() => handleLinkPress(link.id)}
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons 
                  name={link.icon as any} 
                  size={20} 
                  color="#757575" 
                  className="mr-3"
                />
                <Text className="text-base text-text-primary">{link.title}</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
            </TouchableOpacity>
          ))}
        </View>

        {/* App Info */}
        <View className="mt-8 bg-white rounded-lg p-6">
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
    </SafeAreaView>
  );
}; 
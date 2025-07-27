import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const mockUser = {
  name: 'ШУКУР ГАЙНУТДИНОВ',
  level: 'Полупрофи',
  subscribers: 4,
  subscriptions: 4,
  views: 4,
  rating: 2900,
  tournaments: 7,
  wins: 3,
  matchesPlayed: 58,
  weeksInRow: 3,
  role: 'Вратарь / Полузащитник',
};

const mockUpcomingMatches = [
  { id: 1, time: 'Сегодня, 19:00', format: '10x10', location: '@Bunyodkor' },
  { id: 2, time: 'Завтра, 20:00', format: '7x7', location: '@Jar' },
];

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-background-default">
      {/* Header */}
      <View className="bg-primary pt-12 pb-4">
        <View className="px-6">
          <Text className="text-lg font-bold text-white">FOOT HOST</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Picture and Name */}
        <View className="items-center mt-6 mb-6">
          <View className="relative">
            <View className="w-24 h-24 bg-gray-300 rounded-full items-center justify-center">
              <MaterialCommunityIcons name="account" size={48} color="#757575" />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-primary rounded-full p-2">
              <MaterialCommunityIcons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center mt-4">
            <Text className="text-xl font-bold text-text-primary">{mockUser.name}</Text>
            <MaterialCommunityIcons name="trophy" size={20} color="#FFD700" />
          </View>
          <View className="flex-row items-center mt-1">
            <Text className="text-base text-text-secondary">{mockUser.level}</Text>
            <MaterialCommunityIcons name="trophy" size={16} color="#FFD700" />
          </View>
        </View>

        {/* Engagement Statistics */}
        <View className="flex-row justify-around mx-6 mb-6">
          <View className="bg-gray-100 rounded-lg p-4 flex-1 mx-1 items-center">
            <Text className="text-lg font-bold text-text-primary">{mockUser.subscribers}</Text>
            <Text className="text-sm text-text-secondary">Подписчики</Text>
          </View>
          <View className="bg-gray-100 rounded-lg p-4 flex-1 mx-1 items-center">
            <Text className="text-lg font-bold text-text-primary">{mockUser.subscriptions}</Text>
            <Text className="text-sm text-text-secondary">Подписки</Text>
          </View>
          <View className="bg-gray-100 rounded-lg p-4 flex-1 mx-1 items-center">
            <Text className="text-lg font-bold text-text-primary">{mockUser.views}</Text>
            <Text className="text-sm text-text-secondary">Просмотры</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row mx-6 mb-6">
          <TouchableOpacity className="flex-1 bg-primary rounded-lg py-3 mr-2">
            <Text className="text-white text-center font-semibold">Добавить друзей</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-primary rounded-lg items-center justify-center">
            <MaterialCommunityIcons name="share-variant" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Player Statistics */}
        <View className="mx-6 mb-6">
          <Text className="text-lg font-bold text-text-primary mb-4">СТАТИСТИКА ИГРОКА</Text>
          <View className="bg-white rounded-lg p-4">
            <View className="flex-row">
              <View className="flex-1">
                <Text className="text-sm text-text-secondary mb-1">Рейтинг: {mockUser.rating} очков</Text>
                <Text className="text-sm text-text-secondary mb-1">Турниры: {mockUser.tournaments} участия</Text>
                <Text className="text-sm text-text-secondary mb-1">Победы: {mockUser.wins} турнира</Text>
                <Text className="text-sm text-text-secondary">Матчи сыграно: {mockUser.matchesPlayed}</Text>
              </View>
              <View className="w-px bg-gray-300 mx-4" />
              <View className="flex-1">
                <Text className="text-sm text-text-secondary mb-1">{mockUser.weeksInRow} - недели подряд</Text>
                <Text className="text-sm text-text-secondary mb-1">Активный режим</Text>
                <Text className="text-sm text-text-secondary">Амплуа: {mockUser.role}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Matches */}
        <View className="mx-6 mb-6">
          <Text className="text-lg font-bold text-text-primary mb-4">ПРЕДСТОЯЩИЕ МАТЧИ</Text>
          {mockUpcomingMatches.map((match) => (
            <View key={match.id} className="bg-white rounded-lg p-4 mb-2">
              <Text className="text-base text-text-primary">{match.time} - {match.format} {match.location}</Text>
            </View>
          ))}
        </View>

        {/* Settings Links */}
        <View className="mx-6 mb-6">
          <TouchableOpacity 
            className="bg-white rounded-lg p-4 mb-2 flex-row items-center justify-between"
            onPress={() => navigation.navigate('PersonalData')}
          >
            <Text className="text-base text-text-primary">Личные данные</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-white rounded-lg p-4 mb-2 flex-row items-center justify-between"
            onPress={() => navigation.navigate('AboutUs')}
          >
            <Text className="text-base text-text-primary">О нас</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#757575" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 
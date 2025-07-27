import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const mockTournaments = [
  {
    id: 1,
    title: 'Weekend Battle: Chilonzor Stadium',
    format: '7х7 - Групповой этап + плей-офф',
    cost: 'Стоимость: 200 000 с команды',
    location: 'Chilonzor Arena',
    participants: '10/12',
    time: 'ЗАВТРА - 17:00',
  },
  {
    id: 2,
    title: 'Weekend Battle: Chilonzor Stadium',
    format: '7х7 - Групповой этап + плей-офф',
    cost: 'Стоимость: 200 000 с команды',
    location: 'Chilonzor Arena',
    participants: '10/12',
    time: 'ЗАВТРА - 17:00',
  },
  {
    id: 3,
    title: 'Weekend Battle: Chilonzor Stadium',
    format: '7х7 - Групповой этап + плей-офф',
    cost: 'Стоимость: 200 000 с команды',
    location: 'Chilonzor Arena',
    participants: '10/12',
    time: 'ЗАВТРА - 17:00',
  },
];

export const TournamentsScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-default">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-200">
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons name="arrow-left" size={24} color="#212121" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-text-primary">ТУРНИРЫ</Text>
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#212121" />
        </TouchableOpacity>
      </View>

      {/* Tournament List */}
      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        {mockTournaments.map((tournament) => (
          <View key={tournament.id} className="bg-gray-100 rounded-xl p-6 mb-4">
            <Text className="text-lg font-bold text-text-primary mb-2">{tournament.title}</Text>
            <Text className="text-base text-text-secondary mb-1">{tournament.format}</Text>
            <Text className="text-base text-text-secondary mb-4">{tournament.cost}</Text>
            
            <View className="mb-4">
              <View className="flex-row items-center mb-1">
                <MaterialCommunityIcons name="map-marker" size={16} color="#4CAF50" />
                <Text className="text-sm text-text-secondary ml-1">{tournament.location}</Text>
              </View>
              
              <View className="flex-row items-center mb-1">
                <MaterialCommunityIcons name="account-group" size={16} color="#4CAF50" />
                <Text className="text-sm text-text-secondary ml-1">{tournament.participants}</Text>
              </View>
            </View>
            
            <Text className="text-sm font-semibold text-primary">{tournament.time}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}; 
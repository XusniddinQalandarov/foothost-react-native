import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from '../components/common';

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
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-4 pb-2">
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons name="arrow-left" size={28} color="#212121" />
        </TouchableOpacity>
        <Text className="text-[28px] font-artico-bold text-text-primary text-center flex-1 -ml-8">ТУРНИРЫ</Text>
        <TouchableOpacity className="p-2">
          <MaterialCommunityIcons name="dots-vertical" size={28} color="#212121" />
        </TouchableOpacity>
      </View>

      {/* Tournament List */}
      <Container padding="sm">
        <ScrollView className="flex-1 pt-2" showsVerticalScrollIndicator={false}>
          {mockTournaments.map((tournament) => (
            <View key={tournament.id} className="bg-gray-100 rounded-xl px-4 py-3 mb-4 shadow-sm">
              <Text className="text-lg font-manrope-bold text-text-primary mb-1">{tournament.title}</Text>
              <Text className="text-base text-[#150000] mb-0.5">{tournament.format}</Text>
              <Text className="text-base text-[#150000] mb-2">Стоимость: <Text className="font-manrope-bold">200 000</Text> с команды</Text>
              <View className="flex-row items-center justify-between mt-2">
                <View className="flex-row items-center">
                  <MaterialCommunityIcons name="map-marker" size={18} color="#45AF31" />
                  <Text className="text-xs text-text-primary ml-1 font-manrope-bold">{tournament.location}</Text>
                </View>
                <View className="flex-row items-center">
                  <MaterialCommunityIcons name="account-group" size={18} color="#45AF31" />
                  <Text className="text-xs text-text-primary ml-1 font-manrope-bold">{tournament.participants}</Text>
                </View>
                <Text className="text-xs text-text-primary font-manrope-bold">{tournament.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}; 
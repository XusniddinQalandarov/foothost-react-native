import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import SVG files
import News1Svg from '../../assets/images/homepage/news1.svg';
import News2Svg from '../../assets/images/homepage/news2.svg';
import BestFieldSvg from '../../assets/images/homepage/bestfield.svg';
import MockClansSvg from '../../assets/images/homepage/mockClans.svg';
import ReadyMatchSvg from '../../assets/images/homepage/readyMatch.svg';

const mockClans = [
  { id: 1, name: 'Paxtakor', wins: 37, losses: 8, score: 1886, rank: 1 },
  { id: 2, name: 'Paxtakor', wins: 37, losses: 8, score: 1456, rank: 2 },
  { id: 3, name: 'Paxtakor', wins: 37, losses: 8, score: 1286, rank: 3 },
];

export const HomeScreen: React.FC = () => {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return '#FFD700'; // Gold
      case 2: return '#C0C0C0'; // Silver
      case 3: return '#CD7F32'; // Bronze
      default: return '#757575';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="flex-row items-center">
          <View className="w-8 h-8 bg-primary rounded-lg items-center justify-center mr-2">
            <Text className="text-white font-bold text-sm">FH</Text>
          </View>
          <Text className="text-lg font-bold text-text-primary">FOOT HOST</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell" size={24} color="#212121" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search and Filter Section */}
        <View className="px-6 mb-6">
          <View className="flex-row items-center mb-4">
            <TextInput
              placeholder="Team, sport or venue"
              className="flex-1 bg-white rounded-lg px-4 py-3 mr-2"
              placeholderTextColor="#757575"
            />
            <TouchableOpacity className="w-12 h-12 bg-primary rounded-lg items-center justify-center">
              <MaterialCommunityIcons name="magnify" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="flex-row space-x-3">
            <TouchableOpacity className="flex-1 bg-primary rounded-lg px-4 py-3 flex-row items-center justify-center">
              <MaterialCommunityIcons name="map-marker" size={16} color="white" />
              <Text className="text-white font-semibold ml-2">Ташкент</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 flex-row items-center justify-center">
              <MaterialCommunityIcons name="calendar" size={16} color="#757575" />
              <Text className="text-text-secondary font-semibold ml-2">00/00/2026</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 flex-row items-center justify-center">
              <MaterialCommunityIcons name="clock-outline" size={16} color="#757575" />
              <Text className="text-text-secondary font-semibold ml-2">00:00</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Fields Section */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-text-primary">ПОПУЛЯРНЫЕ ПОЛЯ</Text>
            <TouchableOpacity>
              <Text className="text-primary font-semibold">View all {'>'}</Text>
            </TouchableOpacity>
          </View>

          <View className="relative">
            <Image
              source={require('../../assets/images/homepage/homepage.png')}
              className="w-full h-48 rounded-lg"
              resizeMode="cover"
            />
            <View className="absolute bottom-4 left-4">
              <Text className="text-white font-bold text-lg mb-1">BUNYODKOR</Text>
              <View className="flex-row items-center">
                <MaterialCommunityIcons name="map-marker" size={16} color="white" />
                <Text className="text-white text-sm ml-1">Малая кольцевая дорога</Text>
              </View>
            </View>
            <View className="absolute bottom-4 right-4">
              <View className="flex-row items-center mb-1">
                <MaterialCommunityIcons name="star" size={16} color="#FFD700" />
                <Text className="text-white font-bold ml-1">9.9</Text>
              </View>
              <Text className="text-white text-sm">4.9 км от вас</Text>
            </View>
          </View>

          {/* Pagination Dots */}
          <View className="flex-row justify-center mt-4 space-x-2">
            <View className="w-2 h-2 bg-primary rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
          </View>
        </View>

        {/* News Section */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-text-primary">NEWS</Text>
            <TouchableOpacity>
              <Text className="text-primary font-semibold">View all {'>'}</Text>
            </TouchableOpacity>
          </View>

          {/* Two smaller horizontal cards */}
          <View className="flex-row space-x-4 mb-4">
            <View className="flex-1">
              <View className="w-full h-40 rounded-lg overflow-hidden relative">
                <News1Svg width="100%" height="100%" />
                <View className="absolute bottom-2 left-2 right-2">
                  <Text className="text-white text-sm leading-4">
                    Gamemag.ru - Состоялся релиз футбольного...
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-1">
              <View className="w-full h-40 rounded-lg overflow-hidden relative">
                <News2Svg width="100%" height="100%" />
                <View className="absolute bottom-2 left-2 right-2">
                  <Text className="text-white text-sm leading-4">
                    Yamal helps Barcelona seal La Liga title at rivals
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* One large full-width card */}
          <View className="relative">
            <View className="w-full h-56 rounded-lg overflow-hidden">
              <BestFieldSvg width="100%" height="100%" />
            </View>
            <View className="absolute top-4 left-4">
              <Text className="text-white text-xl font-bold mb-1">
                ЛУЧШИЕ ФУТБОЛЬНЫЕ ПОЛЯ В ТАШКЕНТЕ
              </Text>
              <Text className="text-white text-sm">Debits - 03 June 2023</Text>
            </View>
            <TouchableOpacity className="absolute bottom-4 right-4 bg-gray-800 rounded-lg px-4 py-2">
              <Text className="text-white font-semibold">Читать</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Clans Section */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-text-primary">CLANS</Text>
            <TouchableOpacity>
              <Text className="text-primary font-semibold">View all {'>'}</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-3">
            {mockClans.map((clan) => (
              <View key={clan.id} className="flex-row items-center bg-white rounded-lg p-4">
                <View 
                  className="w-12 h-12 rounded-full items-center justify-center mr-4"
                  style={{ backgroundColor: getRankColor(clan.rank) }}
                >
                  <Text className="text-white font-bold text-lg">{clan.rank}</Text>
                </View>
                <View className="flex-1 flex-row items-center">
                  <View className="w-8 h-8 bg-purple-500 rounded-full items-center justify-center mr-3">
                    <MaterialCommunityIcons name="shield" size={20} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-bold text-text-primary">{clan.name}</Text>
                    <Text className="text-sm text-text-secondary">
                      победа - {clan.wins} | поражение - {clan.losses}
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center">
                  <MaterialCommunityIcons name="trophy" size={16} color="#FFD700" />
                  <Text className="text-base font-bold text-text-primary ml-1">{clan.score}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Ready to Play Section */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-2xl font-bold text-primary mb-4">ГОТОВ К ИГРЕ?</Text>
              <TouchableOpacity className="bg-white border-2 border-primary rounded-lg px-6 py-3 self-start">
                <Text className="text-primary font-semibold">Создать Матч</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1">
              <View className="w-full h-32 rounded-lg overflow-hidden">
                <ReadyMatchSvg width="100%" height="100%" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 
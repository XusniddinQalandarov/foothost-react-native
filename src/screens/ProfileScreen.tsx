import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header, Container, Button, SectionHeader } from '../components/common';
import { ClanCard } from '../components/common/ClanCard';
import LogoWhite from '../../assets/images/logo_white.svg';
import MockClansSvg from '../../assets/images/homepage/mockClans.svg';

const mockUser = {
  name: 'ШУКУР ГАЙНУТДИНОВ',
  level: 'Полупрофи',
  rating: 2900,
  tournaments: 7,
  wins: 3,
  matchesPlayed: 58,
  weeksInRow: 3,
  role: 'Вратарь / Полузащитник',
  clan: {
    id: 1,
    name: 'Paxtakor',
    wins: 37,
    losses: 8,
    score: 1886,
    rank: 1,
  },
};

const mockUpcomingMatches = [
  { id: 1, time: 'Сегодня, 19:00', format: '10x10', location: '@Bunyodkor' },
  { id: 2, time: 'Завтра, 20:00', format: '7x7', location: '@Jar' },
];

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Green Header - taller for profile picture overlap */}
      <View className="bg-primary" style={{ height: 160, position: 'relative' }}>
        <Header
          left={<LogoWhite width={100} height={40} style={{ marginTop: 16 }} />}
          title={undefined}
          right={<TouchableOpacity><MaterialCommunityIcons name="dots-vertical" size={28} color="#fff" /></TouchableOpacity>}
          style={{ backgroundColor: 'transparent', paddingTop: 32, paddingBottom: 0 }}
        />
        {/* Profile Picture - absolute, overlaps green and white */}
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: -64, alignItems: 'center', zIndex: 10 }}>
          <View className="w-32 h-32 rounded-full bg-white items-center justify-center border-4 border-primary" style={{ elevation: 4 }}>
            <View className="w-28 h-28 bg-gray-300 rounded-full items-center justify-center">
              <MaterialCommunityIcons name="account" size={64} color="#757575" />
              <TouchableOpacity className="absolute inset-0 items-center justify-center w-full h-full">
                <MaterialCommunityIcons name="camera" size={38} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 72 }}>
        <Container padding="sm">
          {/* Name and Level */}
          <View className="items-center mt-2 mb-2">
            <Text className="text-2xl font-artico-bold text-text-primary text-center">{mockUser.name} <MaterialCommunityIcons name="soccer" size={22} color="#FFD700" /></Text>
            <View className="flex-row items-center mt-1">
              <MaterialCommunityIcons name="trophy" size={18} color="#FFD700" />
              <Text className="ml-2 text-base font-manrope-bold text-text-secondary">{mockUser.level}</Text>
            </View>
          </View>
          {/* Clan Info */}
          {mockUser.clan && (
            <View className="items-center mb-4">
              <ClanCard
                rank={mockUser.clan.rank}
                name={mockUser.clan.name}
                wins={mockUser.clan.wins}
                losses={mockUser.clan.losses}
                score={mockUser.clan.score}
                logo={<MockClansSvg width={34} height={42} />}
              />
            </View>
          )}
          {/* Player Statistics */}
          <SectionHeader title="СТАТИСТИКА ИГРОКА" />
          <View className="bg-white rounded-lg p-4 mb-4 flex-row justify-between items-center border border-gray-200">
            <View className="flex-1">
              <Text className="text-sm text-text-secondary mb-1">Рейтинг: <Text className="font-manrope-bold text-text-primary">{mockUser.rating}</Text> очков</Text>
              <Text className="text-sm text-text-secondary mb-1">Турниры: <Text className="font-manrope-bold text-text-primary">{mockUser.tournaments}</Text> участия</Text>
              <Text className="text-sm text-text-secondary mb-1">Победы: <Text className="font-manrope-bold text-text-primary">{mockUser.wins}</Text> турнира</Text>
              <Text className="text-sm text-text-secondary">Матчи сыграно: <Text className="font-manrope-bold text-text-primary">{mockUser.matchesPlayed}</Text></Text>
            </View>
            <View className="w-px bg-gray-300 mx-4 self-stretch" />
            <View className="flex-1">
              <Text className="text-sm text-text-secondary mb-1"><Text className="font-manrope-bold text-text-primary">{mockUser.weeksInRow}</Text> - недели подряд</Text>
              <Text className="text-sm text-text-secondary mb-1">Активный режим</Text>
              <Text className="text-sm text-text-secondary">Амплуа: <Text className="font-manrope-bold text-text-primary">{mockUser.role}</Text></Text>
            </View>
          </View>
          {/* Upcoming Matches */}
          <SectionHeader title="ПРЕДСТОЯЩИЕ МАТЧИ" />
          <View className="mb-4">
            {mockUpcomingMatches.map((match) => (
              <View key={match.id} className="bg-white rounded-lg p-4 mb-2 border border-gray-200">
                <Text className="text-base text-text-primary">{match.time} – {match.format} {match.location}</Text>
              </View>
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}; 
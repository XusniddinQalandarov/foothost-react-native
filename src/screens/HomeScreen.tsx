import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

// Import reusable components
import { 
  SearchBar, 
  FilterButton, 
  SectionHeader, 
  FieldCard, 
  NewsCard, 
  ClanCard,
  Container,
  Header
} from '../components/common';

// Import SVG files
import News1Svg from '../../assets/images/homepage/news1.svg';
import News2Svg from '../../assets/images/homepage/news2.svg';
import BestFieldSvg from '../../assets/images/homepage/bestfield.svg';
import MockClansSvg from '../../assets/images/homepage/mockClans.svg';
import ReadyMatchSvg from '../../assets/images/homepage/readyMatch.svg';
import Logo from '../../assets/images/logo.svg';
import Bell from '../../assets/images/homepage/bell.svg';

const mockClans = [
  { id: 1, name: 'Paxtakor', wins: 37, losses: 8, score: 1886, rank: 1 },
  { id: 2, name: 'Paxtakor', wins: 37, losses: 8, score: 1456, rank: 2 },
  { id: 3, name: 'Paxtakor', wins: 37, losses: 8, score: 1286, rank: 3 },
];

export const HomeScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'location' | 'date' | 'time'>('location');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top Bar */}
      <Header
        left={<Logo width={100} height={40} />}
        right={<TouchableOpacity><Bell width={24} height={24} /></TouchableOpacity>}
      >
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search and Filter Section */}
        <Container padding="md">
          <SearchBar 
            value={searchValue}
            onChangeText={setSearchValue}
            onSearch={() => console.log('Search pressed')}
          />

          <View className="flex-row">
            <FilterButton
              icon="map-marker"
              text="Ташкент"
              isActive={selectedFilter === 'location'}
              activeColor="#45AF31"
              inactiveColor="#fff"
              activeTextColor="#fff"
              inactiveTextColor="#45AF31"
              activeBorderColor="#45AF31"
              inactiveBorderColor="#45AF31"
              iconColor="#45AF31"
              activeIconColor="#fff"
              onPress={() => setSelectedFilter('location')}
              className="mr-2"
            />
            <FilterButton
              icon="calendar"
              text="00/00/2026"
              isActive={selectedFilter === 'date'}
              activeColor="#45AF31"
              inactiveColor="#fff"
              activeTextColor="#fff"
              inactiveTextColor="#45AF31"
              activeBorderColor="#45AF31"
              inactiveBorderColor="#45AF31"
              iconColor="#45AF31"
              activeIconColor="#fff"
              onPress={() => setSelectedFilter('date')}
              className="mr-2"
            />
            <FilterButton
              icon="clock-outline"
              text="00:00"
              isActive={selectedFilter === 'time'}
              activeColor="#45AF31"
              inactiveColor="#fff"
              activeTextColor="#fff"
              inactiveTextColor="#45AF31"
              activeBorderColor="#45AF31"
              inactiveBorderColor="#45AF31"
              iconColor="#45AF31"
              activeIconColor="#fff"
              onPress={() => setSelectedFilter('time')}
            />
          </View>
        </Container>

        {/* Popular Fields Section */}
        <Container padding="md">
          <SectionHeader 
            title="ПОПУЛЯРНЫЕ ПОЛЯ"
            onViewAll={() => console.log('View all fields')}
          />

          <FieldCard
            name="BUNYODKOR"
            location="Малая кольцевая дорога"
            rating={9.9}
            distance="4.9 км от вас"
            image={require('../../assets/images/homepage/homepage.png')}
            onPress={() => console.log('Field pressed')}
          />

          {/* Pagination Dots */}
          <View className="flex-row justify-center mt-4 space-x-2">
            <View className="w-2 h-2 bg-primary rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
          </View>
        </Container>

        {/* News Section */}
        <Container padding="md" className="mb-2 w-full">
          <SectionHeader 
            title="NEWS"
            onViewAll={() => console.log('View all news')}
          />

          {/* Two smaller horizontal cards */}
          <View className="flex-row space-x-8 mb-4">
            <NewsCard
              title="Gamemag.ru - Состоялся релиз футбольного..."
              image={<News1Svg width="100%" height="100%" style={{ flex: 1 }} />}
              onPress={() => console.log('News 1 pressed')}
              className="flex-1"
            />
            <NewsCard
              title="Yamal helps Barcelona seal La Liga title at rivals"
              image={<News2Svg width="100%" height="100%"/>}
              onPress={() => console.log('News 2 pressed')}
              className="flex-1"
            />
          </View>

          {/* One large full-width card */}
          <View className="relative">
            <View className="w-full h-64 rounded-lg overflow-hidden">
              <BestFieldSvg width="100%" height="100%" />
            </View>
            <View className="absolute top-4 left-4">
              <Text className="text-white text-xl font-artico mb-1">
                ЛУЧШИЕ ФУТБОЛЬНЫЕ ПОЛЯ В ТАШКЕНТЕ
              </Text>
              <Text className="text-white text-sm">Debits - 03 June 2023</Text>
            </View>
            <TouchableOpacity className="absolute bottom-4 right-4 bg-gray-800 rounded-lg px-4 py-2">
              <Text className="text-white font-semibold">Читать</Text>
            </TouchableOpacity>
          </View>
        </Container>

        {/* Clans Section */}
        <Container padding="md">
          <SectionHeader 
            title="CLANS"
            onViewAll={() => console.log('View all clans')}
          />

          <View className="space-y-3">
            {mockClans.map((clan) => (
              <ClanCard
                key={clan.id}
                rank={clan.rank}
                name={clan.name}
                wins={clan.wins}
                losses={clan.losses}
                score={clan.score}
                logo={<MockClansSvg width={34} height={42} />}
              />
            ))}
          </View>
        </Container>

        {/* Ready to Play Section */}
        <Container padding="md" className="mb-4">
          <View className="flex-row items-center justify-between bg-[#EEEDED] px-6 py-4 rounded-lg">
            <View className="flex-1">
              <MaskedView
                style={{ flexDirection: 'row', alignSelf: 'flex-start' }}
                maskElement={
                  <Text
                    style={{
                      fontSize: 40,
                      fontFamily: 'Artico-Bold',
                      fontWeight: 'bold',
                      lineHeight: 48,
                      letterSpacing: 0.5,
                      color: 'black',
                    }}
                  >
                    ГОТОВ К{"\n"}ИГРЕ?
                  </Text>
                }
              >
                <LinearGradient
                  colors={['#A2C673', '#43AE30']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  style={{
                    width: 320,
                    height: 100, 
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      opacity: 0,
                      fontSize: 40,
                      fontFamily: 'Artico-Bold',
                      fontWeight: 'bold',
                      lineHeight: 48,
                      letterSpacing: 0.5,
                    }}
                  >
                    ГОТОВ К{"\n"}ИГРЕ?
                  </Text>
                </LinearGradient>
              </MaskedView>
              <TouchableOpacity className="mt-6 border-2 border-primary rounded-lg px-6 py-3 self-start">
                <Text className="text-primary font-manrope-medium">Создать Матч</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1">
              <View className="absolute -top-56 -left-14 rounded-lg">
                <ReadyMatchSvg width="28%" height="50%" />
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}; 
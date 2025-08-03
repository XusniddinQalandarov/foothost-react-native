import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from '../components/common';
import { SuccessModal, TeamSelectionModal, TeamConfirmationModal } from '../components/common';
// SVGs are assumed to be set up correctly
import TypeOfPitchSvg from '../../assets/images/booking/typeofPitch.svg';
import TypeOfFieldSvg from '../../assets/images/booking/typeofField.svg';
import LengthOfFieldSvg from '../../assets/images/booking/lengthofField.svg';
import TimeOfWorkSvg from '../../assets/images/booking/timeofWork.svg';
import ChelseaSvg from '../../assets/images/profile/chelsea.svg';
import MyuSvg from '../../assets/images/profile/MYU.svg';

type TournamentDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TournamentDetails'
>;

type TournamentDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'TournamentDetails'
>;

interface Props {
  navigation: TournamentDetailsScreenNavigationProp;
  route: TournamentDetailsScreenRouteProp;
}

const { width } = Dimensions.get('window');

// Mock tournament data
const mockTournament = {
  id: 1,
  title: 'WEEKEND BATTLE',
  format: '7х7 - Групповой этап + плей-офф',
  cost: 'Стоимость: 200 000 с команды',
  location: 'Chilonzor Arena',
  participants: '10/12',
  time: '17:00',
  date: '25.12.25',
  price: '200.000 СУМ',
  distance: '4.9 км от вас',
  surface: 'Искусственное покрытие',
  pitchType: 'Открытая',
  dimensions: '20x40',
  workTime: '08:00 - 03:00',
  address: 'Малая кольцевая дорога',
  team1: 'CHELSEA FOOTBALL CLUB',
  team2: 'MANCHESTER UNITED',
};

// Mock user teams data (same as in ProfileScreen)
interface Team {
  id: string;
  name: string;
  logo?: React.ReactNode;
}

const mockUserTeams: Team[] = [
  {
    id: '1',
    name: 'CHELSEA',
    logo: <ChelseaSvg width={48} height={48} />,
  },
  {
    id: '2',
    name: 'ARSENAL',
    logo: null,
  },
  {
    id: '3',
    name: 'MAN UNITED',
    logo: <MyuSvg width={48} height={48} />,
  },
];

// Helper component for info cards
const InfoCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <View className="bg-gray-100 rounded-lg p-3 flex-1 flex-row items-center h-full">
    {icon}
    <View className="ml-2">
      <Text className="font-manrope-bold text-xs">{label}</Text>
      <Text className="font-manrope-medium text-[10px] mt-1">{value}</Text>
    </View>
  </View>
);

export const TournamentDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showTeamSelectionModal, setShowTeamSelectionModal] = useState(false);
  const [showTeamConfirmationModal, setShowTeamConfirmationModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  
  // Use route params if available, otherwise use mock data
  const tournament = route?.params?.tournament || mockTournament;

  const handleJoinTournament = () => {
    if (isSubmitting) return;
    
    // Show team selection modal first
    setShowTeamSelectionModal(true);
  };

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
    setShowTeamSelectionModal(false);
    setShowTeamConfirmationModal(true);
  };

  const handleCloseTeamSelectionModal = () => {
    setShowTeamSelectionModal(false);
  };

  const handleCloseTeamConfirmationModal = () => {
    setShowTeamConfirmationModal(false);
    setSelectedTeam(null);
  };

  const handleConfirmTeamSelection = () => {
    setShowTeamConfirmationModal(false);
    
    // Simulate API call for tournament participation
    setIsSubmitting(true);
    setTimeout(() => {
      setShowSuccessModal(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setSelectedTeam(null);
    // Navigate back to tournaments list
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 pt-4 pb-2">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <MaterialCommunityIcons name="arrow-left" size={28} color="#212121" />
          </TouchableOpacity>
          <View className="flex-1" />
          <TouchableOpacity className="p-2">
            <MaterialCommunityIcons name="dots-vertical" size={28} color="#212121" />
          </TouchableOpacity>
        </View>

        {/* Tournament Banner */}
        <View className="relative mx-4 mb-4">
          <View className="rounded-xl h-48 relative overflow-hidden">
            {/* Background Image */}
            <Image 
              source={require('../../assets/images/stadium/matchReview.png')} 
              className="w-full h-full absolute"
              resizeMode="cover"
            />
            
            {/* Overlay for better text readability */}
            <View className="absolute inset-0 bg-black bg-opacity-30" />
            
            {/* Teams VS Display */}
            <View className="flex-1 flex-row items-center justify-center px-6 relative z-10">
              {/* Team 1 */}
              <View className="flex-1 items-center justify-center">
                <View className="mb-2 flex items-center justify-center">
                  <ChelseaSvg width={80} height={80} />
                </View>
                <Text className="text-white font-bold text-xs text-center">{tournament.team1}</Text>
              </View>
              
              {/* VS */}
              <View className="mx-4 flex items-center justify-center">
                <Text className="text-white font-bold text-2xl">VS</Text>
              </View>
              
              {/* Team 2 */}
              <View className="flex-1 items-center justify-center">
                <View className="mb-2 flex items-center justify-center">
                  <MyuSvg width={80} height={80} />
                </View>
                <Text className="text-white font-bold text-xs text-center">{tournament.team2}</Text>
              </View>
            </View>
          </View>
        </View>

        <Container padding="sm">
          {/* Tournament Details */}
          <View className="mb-6">
            <View className="flex-row justify-between items-start mb-2">
              <View className="flex-1">
                <Text className="text-text-primary font-artico-bold text-[28px] mb-1">{tournament.title}</Text>
                <View className="flex-row items-center">
                  <MaterialCommunityIcons name="map-marker" size={14} color="#758A80" />
                  <Text className="text-[#758A80] font-manrope-medium text-xs ml-1">{tournament.address}</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-black font-artico-bold text-[28px]">{tournament.price}</Text>
                <Text className="text-[#758A80] font-manrope-medium text-xs mt-1">{tournament.distance}</Text>
              </View>
            </View>
          </View>

          {/* Tournament Info Cards (2x2 Grid) */}
          <View className="mb-6">
            <View className="flex-row justify-between mb-2">
              <InfoCard 
                icon={<TypeOfPitchSvg width={36} height={36} />} 
                label="Покрытие" 
                value={tournament.surface} 
              />
              <View className="w-2" />
              <InfoCard 
                icon={<TypeOfFieldSvg width={36} height={36} />} 
                label="Тип площадки" 
                value={tournament.pitchType} 
              />
            </View>
            <View className="flex-row justify-between">
              <InfoCard 
                icon={<LengthOfFieldSvg width={36} height={36} />} 
                label="Длина х Ширина (м)" 
                value={tournament.dimensions} 
              />
              <View className="w-2" />
              <InfoCard 
                icon={<TimeOfWorkSvg width={36} height={36} />} 
                label="Время работы" 
                value={tournament.workTime} 
              />
            </View>
          </View>

          {/* Location Section */}
          <View className="mb-6">
            <Text className="font-artico-medium text-xl mb-3">МЕСТОПОЛОЖЕНИЕ:</Text>
            <Image 
              source={require('../../assets/images/map-placeholder.png')} 
              className="w-full h-40 rounded-xl" 
              resizeMode="cover"
            />
          </View>

          {/* Tournament Stats */}
          <View className="mb-20">
            <View className="flex-row justify-between">
              <View 
                className="bg-white border border-[#758A80] rounded-lg p-2 items-center justify-center h-12 flex-1 mr-2 flex-row"
              >
                <Text className="text-[#758A80] font-bold text-sm mr-2">{tournament.participants}</Text>
                <MaterialCommunityIcons name="account-group" size={20} color="#45AF31" />
              </View>
              <View 
                className="bg-white border border-[#758A80] rounded-lg p-2 items-center justify-center h-12 flex-1 ml-2 flex-row"
              >
                <Text className="text-[#758A80] font-bold text-sm mr-2">{tournament.date} - {tournament.time}</Text>
                <MaterialCommunityIcons name="calendar" size={20} color="#45AF31" />

              </View>
            </View>
          </View>
        </Container>
      </ScrollView>

      {/* Join Tournament Button */}
      <View className="absolute bottom-0 left-0 right-0 px-4 pt-2 pb-6">
        <TouchableOpacity
          className={`rounded-xl py-4 items-center ${
            !isSubmitting ? 'bg-primary' : 'bg-gray-300'
          }`}
          onPress={handleJoinTournament}
          disabled={isSubmitting}
          activeOpacity={0.7}
        >
          <Text className="text-white font-manrope-bold text-md">
            {isSubmitting ? 'Присоединение...' : 'Присоединиться к турниру'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Team Selection Modal */}
      <TeamSelectionModal
        visible={showTeamSelectionModal}
        teams={mockUserTeams}
        selectedTeamId={selectedTeam?.id}
        onClose={handleCloseTeamSelectionModal}
        onSelectTeam={handleTeamSelect}
      />

      {/* Team Confirmation Modal */}
      <TeamConfirmationModal
        visible={showTeamConfirmationModal}
        selectedTeam={selectedTeam}
        tournamentName={tournament.title}
        onClose={handleCloseTeamConfirmationModal}
        onConfirm={handleConfirmTeamSelection}
      />

      {/* Success Modal */}
      <SuccessModal
        visible={showSuccessModal}
        onClose={handleCloseModal}
        title="УСПЕШНО ПРИСОЕДИНИЛИСЬ"
        message="Вы успешно присоединились к турниру. Ожидайте подтверждения от организатора."
      />
    </SafeAreaView>
  );
}; 
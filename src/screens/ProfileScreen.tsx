import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { 
  Header, 
  Container, 
  MatchCard, 
  TeamCard, 
  Button,
  CreateTeamModal,
  TeamDetailsModal,
  TeamOptionsModal,
  InviteQRModal
} from '../components/common';
import LogoWhite from '../../assets/images/logo_white.svg';
import CameraSvg from '../../assets/images/profile/camera.svg';
import ChelseaSvg from '../../assets/images/profile/chelsea.svg';
import MyuSvg from '../../assets/images/profile/MYU.svg';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

interface Team {
  id: string;
  name: string;
  logo?: any;
  isUserTeam?: boolean;
  isUserOwner?: boolean;
}

interface TeamMember {
  id: string;
  name: string;
  avatar?: string;
}

const mockUser = {
  name: 'ШУКУР ГАЙНУТДИНОВ',
};

const mockTeamMembers: TeamMember[] = [
  { id: '1', name: 'ALI' },
  { id: '2', name: 'ALI' },
  { id: '3', name: 'ALI' },
  { id: '4', name: 'ALI' },
  { id: '5', name: 'ALI' },
  { id: '6', name: 'ALI' },
];

const mockUpcomingMatches = [
  {
    id: '1',
    location: 'Малая кольцевая...',
    dateTime: '24.12.2025 - 18:00',
    teams: [
      { name: 'CHELSEA', logo: <ChelseaSvg width={64} height={64} /> },
      { name: 'MAN UTD', logo: <MyuSvg width={64} height={64} /> }
    ] as [Team, Team],
    title: 'Weekend Battle',
    stadiumName: 'Chilonzor Stadium',
    cost: 'Стоимость: 200 000 с команды',
    participants: '10/12',
    image: undefined,
    onPress: () => console.log('Match 1 pressed')
  },
  {
    id: '2',
    location: 'Малая кольцевая...',
    dateTime: '24.12.2025 - 18:00',
    teams: [
      { name: 'CHELSEA', logo: <ChelseaSvg width={64} height={64} /> },
      { name: 'MAN UTD', logo: <MyuSvg width={64} height={64} /> }
    ] as [Team, Team],
    title: 'Weekend Battle',
    stadiumName: 'Chilonzor Stadium',
    cost: 'Стоимость: 200 000 с команды',
    participants: '10/12',
    image: require('../../assets/images/stadium/stadium.png'),
    onPress: () => console.log('Match 2 pressed')
  },
  {
    id: '3',
    location: 'Малая кольцевая...',
    dateTime: '24.12.2025 - 18:00',
    teams: [
      { name: 'CHELSEA', logo: <ChelseaSvg width={64} height={64} /> },
      { name: 'MAN UTD', logo: <MyuSvg width={64} height={64} /> }
    ] as [Team, Team],
    title: 'Weekend Battle',
    stadiumName: 'Chilonzor Stadium',
    cost: 'Стоимость: 200 000 с команды',
    participants: '10/12',
    image: undefined,
    onPress: () => console.log('Match 3 pressed')
  }
];

const mockPastMatches = [
  {
    id: '1',
    location: 'Малая кольцевая...',
    dateTime: '20.12.2025 - 18:00',
    teams: [
      { name: 'ARSENAL', logo: null },
      { name: 'LIVERPOOL', logo: null }
    ] as [Team, Team],
    title: 'Weekend Battle',
    stadiumName: 'Chilonzor Stadium',
    cost: 'Стоимость: 200 000 с команды',
    participants: '12/12',
    image: undefined,
    onPress: () => console.log('Past Match 1 pressed')
  },
  {
    id: '2',
    location: 'Малая кольцевая...',
    dateTime: '15.12.2025 - 18:00',
    teams: [
      { name: 'MAN CITY', logo: null },
      { name: 'TOTTENHAM', logo: null }
    ] as [Team, Team],
    title: 'Weekend Battle',
    stadiumName: 'Chilonzor Stadium',
    cost: 'Стоимость: 200 000 с команды',
    participants: '12/12',
    image: undefined,
    onPress: () => console.log('Past Match 2 pressed')
  }
];

const initialTeams: Team[] = [
  {
    id: '1',
    name: 'CHELSEA',
    logo: <ChelseaSvg width={48} height={48} />,
    isUserOwner: false, // User is a member, not owner
  },
  {
    id: '2',
    name: 'ARSENAL',
    logo: null,
    isUserOwner: false, // User is a member, not owner
  },
];

const initialUserTeams: Team[] = [
  {
    id: '3',
    name: 'MAN UNITED',
    logo: <MyuSvg width={48} height={48} />,
    isUserTeam: true,
    isUserOwner: true, // User owns this team
  }
];

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history' | 'teams'>('upcoming');
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [showTeamDetailsModal, setShowTeamDetailsModal] = useState(false);
  const [showTeamOptionsModal, setShowTeamOptionsModal] = useState(false);
  const [showInviteQRModal, setShowInviteQRModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [userTeams, setUserTeams] = useState<Team[]>(initialUserTeams);
  const [newTeamName, setNewTeamName] = useState('');

  const handlePersonalDetails = useCallback(() => {
    setShowDropdown(false);
    navigation.navigate('PersonalData');
  }, [navigation]);

  const handleAboutUs = useCallback(() => {
    setShowDropdown(false);
    navigation.navigate('AboutUs');
  }, [navigation]);

  const handleLogOut = useCallback(() => {
    setShowDropdown(false);
    Alert.alert(
      'Выйти из аккаунта',
      'Вы уверены, что хотите выйти?',
      [
        { text: 'Отмена', style: 'cancel' },
        { 
          text: 'Выйти', 
          style: 'destructive',
          onPress: () => {
            // Clear any stored user data here
            navigation.navigate('Onboarding');
          }
        }
      ]
    );
  }, [navigation]);

  const handleViewMatch = useCallback((matchId: string) => {
    console.log('View match:', matchId);
    // Navigate to match details or booking
  }, []);

  const handlePastMatchPress = useCallback((match: any) => {
    navigation.navigate('MatchRating', {
      matchId: match.id,
      teams: [match.teams[0].name, match.teams[1].name],
      eventName: match.title,
      date: match.dateTime,
      fieldName: match.stadiumName,
    });
  }, [navigation]);

  const handleCreateTeam = useCallback(() => {
    setShowCreateTeamModal(true);
  }, []);

  const handleTeamPress = useCallback((team: Team) => {
    setSelectedTeam(team);
    setShowTeamDetailsModal(true);
  }, []);

  const handleTeamOptions = useCallback(() => {
    setShowTeamOptionsModal(true);
  }, []);

  const handleInvite = useCallback(() => {
    setShowInviteQRModal(true);
  }, []);

  const handleCopyLink = useCallback(async () => {
    try {
      const baseUrl = 'https://foothost.app/team/invite';
      const teamId = selectedTeam?.id || Date.now().toString();
      const teamName = selectedTeam?.name || '';
      const inviteUrl = `${baseUrl}?team=${teamId}&name=${encodeURIComponent(teamName)}`;
      
      await Clipboard.setStringAsync(inviteUrl);
      Alert.alert('Успешно', 'Ссылка скопирована в буфер обмена');
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось скопировать ссылку');
    }
  }, [selectedTeam]);

  const handleRemoveMember = useCallback((memberId: string, memberName: string) => {
    Alert.alert(
      'Удалить участника',
      `Вы уверены, что хотите удалить ${memberName} из команды?`,
      [
        { text: 'Отмена', style: 'cancel' },
        { 
          text: 'Удалить', 
          style: 'destructive',
          onPress: () => {
            // Here you would typically update the team members list
            Alert.alert('Успешно', `${memberName} удален из команды`);
          }
        }
      ]
    );
  }, []);

  const handleLeaveTeam = useCallback(() => {
    if (selectedTeam) {
      Alert.alert(
        'Покинуть команду',
        `Вы уверены, что хотите покинуть команду ${selectedTeam.name}?`,
        [
          { text: 'Отмена', style: 'cancel' },
          { 
            text: 'Покинуть', 
            style: 'destructive',
            onPress: () => {
              // Remove team from user's teams list
              if (selectedTeam.isUserOwner) {
                setUserTeams(prevTeams => prevTeams.filter(team => team.id !== selectedTeam.id));
              } else {
                setTeams(prevTeams => prevTeams.filter(team => team.id !== selectedTeam.id));
              }
              setSelectedTeam(null);
              setShowTeamDetailsModal(false);
              Alert.alert('Успешно', 'Вы покинули команду');
            }
          }
        ]
      );
    }
  }, [selectedTeam]);

  const handleChangeAvatar = useCallback(() => {
    setShowTeamOptionsModal(false);
    Alert.alert('Изменить аватарку', 'Функция изменения аватарки будет доступна в следующем обновлении');
  }, []);

  const handleDeleteTeam = useCallback(() => {
    setShowTeamOptionsModal(false);
    Alert.alert(
      'Удалить команду',
      'Вы уверены, что хотите удалить команду? Это действие нельзя отменить.',
      [
        { text: 'Отмена', style: 'cancel' },
        { 
          text: 'Удалить', 
          style: 'destructive',
          onPress: () => {
            if (selectedTeam) {
              setUserTeams(prevTeams => prevTeams.filter(team => team.id !== selectedTeam.id));
              setSelectedTeam(null);
              setShowTeamDetailsModal(false);
            }
            Alert.alert('Успешно', 'Команда удалена');
          }
        }
      ]
    );
  }, [selectedTeam]);

  const handleLeave = useCallback(() => {
    setShowTeamOptionsModal(false);
    Alert.alert(
      'Покинуть команду',
      'Вы уверены, что хотите покинуть команду?',
      [
        { text: 'Отмена', style: 'cancel' },
        { 
          text: 'Покинуть', 
          style: 'destructive',
          onPress: () => {
            if (selectedTeam) {
              setUserTeams(prevTeams => prevTeams.filter(team => team.id !== selectedTeam.id));
              setSelectedTeam(null);
              setShowTeamDetailsModal(false);
            }
            Alert.alert('Успешно', 'Вы покинули команду');
          }
        }
      ]
    );
  }, [selectedTeam]);

  const handleCancel = useCallback(() => {
    setShowTeamOptionsModal(false);
  }, []);

  const handleCreateTeamSubmit = useCallback(() => {
    if (newTeamName.trim()) {
      const newTeam: Team = {
        id: Date.now().toString(),
        name: newTeamName.trim().toUpperCase(),
        logo: null,
        isUserTeam: true,
        isUserOwner: true, // New teams are owned by the creator
      };
      
      setUserTeams(prevTeams => [...prevTeams, newTeam]);
      setNewTeamName('');
      setShowCreateTeamModal(false);
      Alert.alert('Успешно', 'Команда создана!');
    } else {
      Alert.alert('Ошибка', 'Пожалуйста, введите название команды');
    }
  }, [newTeamName]);

  const handleCloseCreateTeamModal = useCallback(() => {
    setShowCreateTeamModal(false);
    setNewTeamName('');
  }, []);

  const handleCloseTeamDetailsModal = useCallback(() => {
    setShowTeamDetailsModal(false);
    setSelectedTeam(null);
  }, []);

  const handleCloseInviteQRModal = useCallback(() => {
    setShowInviteQRModal(false);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Backdrop for dropdown */}
      {showDropdown && (
        <TouchableOpacity 
          className="absolute inset-0 z-40"
          onPress={() => setShowDropdown(false)}
          activeOpacity={1}
        />
      )}
      
      {/* Green Header */}
      <View className="bg-primary" style={{ height: 160, position: 'relative' }}>
        <Header
          left={<LogoWhite width={100} height={40} style={{ marginTop: 16 }} />}
          right={
            <View className="relative">
              <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
                <MaterialCommunityIcons name="dots-vertical" size={28} color="#fff" style={{ marginTop: 16 }} />
              </TouchableOpacity>
              {showDropdown && (
                <View className="absolute top-10 -right-5 bg-white rounded-lg shadow-lg border border-gray-200 z-50 w-44">
                  <TouchableOpacity 
                    className="flex-row items-center px-4 py-3 border-b border-gray-100"
                    onPress={handlePersonalDetails}
                  >
                    <MaterialCommunityIcons name="account" size={20} color="#666" />
                    <Text className="ml-3 text-text-primary font-manrope-medium">Личные данные</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    className="flex-row items-center px-4 py-3 border-b border-gray-100"
                    onPress={handleAboutUs}
                  >
                    <MaterialCommunityIcons name="information-outline" size={20} color="#666" />
                    <Text className="ml-3 text-text-primary font-manrope-medium">О НАС</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    className="flex-row items-center px-4 py-3"
                    onPress={handleLogOut}
                  >
                    <MaterialCommunityIcons name="logout" size={20} color="#ef4444" />
                    <Text className="ml-3 text-red-500 font-manrope-medium">Выйти</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          }
          style={{ backgroundColor: 'transparent' }}
        />
        
        {/* Profile Picture - absolute, overlaps green and white */}
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: -64, alignItems: 'center', zIndex: 10 }}>
          <View className="w-32 h-32 rounded-full bg-white items-center justify-center border-4 border-primary" style={{ elevation: 4 }}>
            <View className="w-28 h-28 bg-gray-300 rounded-full items-center justify-center relative">
              <MaterialCommunityIcons name="account" size={64} color="#757575" />
              <TouchableOpacity className="absolute inset-0 items-center justify-center w-full h-full">
                <CameraSvg width={38} height={38} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{ marginTop: 72 }}
        contentContainerStyle={activeTab === 'teams' ? { paddingBottom: 100 } : {}}
      >
        <Container padding="sm">
          {/* Name and Soccer Ball */}
          <View className="items-center mt-2 mb-6">
            <Text className="text-[28px] font-artico-bold text-text-primary text-center">
              {mockUser.name} <MaterialCommunityIcons name="soccer" size={28} color="#FFD700" />
            </Text>
          </View>

          {/* Navigation Tabs */}
          <View className="flex-row mb-6">
            <TouchableOpacity 
              className={`flex-1 py-3 ${activeTab === 'upcoming' ? 'border-b-2 border-primary' : ''}`}
              onPress={() => setActiveTab('upcoming')}
            >
              <Text className={`text-center font-manrope-medium text-xs ${activeTab === 'upcoming' ? 'text-primary' : 'text-[#150000]'}`}>
                Предстоящие матчи
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className={`flex-1 py-3 ${activeTab === 'history' ? 'border-b-2 border-primary' : ''}`}
              onPress={() => setActiveTab('history')}
            >
              <Text className={`text-center font-manrope-medium text-xs ${activeTab === 'history' ? 'text-primary' : 'text-[#150000]'}`}>
                История матчей
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className={`flex-1 py-3 ${activeTab === 'teams' ? 'border-b-2 border-primary' : ''}`}
              onPress={() => setActiveTab('teams')}
            >
              <Text className={`text-center font-manrope-medium text-xs ${activeTab === 'teams' ? 'text-primary' : 'text-[#150000]'}`}>
                Мои команды
              </Text>
            </TouchableOpacity>
          </View>

          {/* Content based on active tab */}
          <View className="mb-4">
            {activeTab === 'upcoming' ? (
              mockUpcomingMatches.map((match) => (
                <View key={match.id} className="mb-4">
                  <View className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <MatchCard
                      id={match.id}
                      location={match.location}
                      dateTime={match.dateTime}
                      teams={match.teams}
                      title={match.title}
                      stadiumName={match.stadiumName}
                      cost={match.cost}
                      participants={match.participants}
                      image={match.image}
                      onPress={match.onPress}
                    />
                    <TouchableOpacity 
                      className="bg-primary py-3 px-4"
                      onPress={() => handleViewMatch(match.id)}
                      style={{ marginTop: 0 }}
                    >
                      <View className="flex-row justify-between items-center">
                        <View className="flex-1">
                          <Text className="text-white font-manrope-bold text-sm mb-1">{match.title}</Text>
                          <Text className="text-white font-manrope-medium text-xs">{match.cost}</Text>
                        </View>
                        <View className="flex-row items-center">
                          <MaterialCommunityIcons name="account-group" size={16} color="white" />
                          <Text className="text-white font-manrope-medium text-xs ml-1">{match.participants}</Text>
                          <MaterialCommunityIcons name="chevron-right" size={20} color="white" className="ml-2" />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : activeTab === 'history' ? (
              mockPastMatches.map((match) => (
                <View key={match.id} className="mb-4">
                  <View className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <MatchCard
                      id={match.id}
                      location={match.location}
                      dateTime={match.dateTime}
                      teams={match.teams}
                      title={match.title}
                      stadiumName={match.stadiumName}
                      cost={match.cost}
                      participants={match.participants}
                      image={match.image}
                      isPastMatch={true}
                      onPress={() => handlePastMatchPress(match)}
                    />
                    <TouchableOpacity 
                      className="py-3 px-4"
                      style={{ backgroundColor: '#1E1E1E', marginTop: 0 }}
                      onPress={() => handlePastMatchPress(match)}
                    >
                      <View className="flex-row justify-between items-center">
                        <View className="flex-1">
                          <Text className="text-white font-manrope-bold text-sm mb-1">{match.title}</Text>
                          <Text className="text-white font-manrope-medium text-xs">{match.cost}</Text>
                        </View>
                        <View className="flex-row items-center">
                          <MaterialCommunityIcons name="account-group" size={16} color="white" />
                          <Text className="text-white font-manrope-medium text-xs ml-1">{match.participants}</Text>
                          <MaterialCommunityIcons name="chevron-right" size={20} color="white" className="ml-2" />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              // Teams tab content
              <View>
                {teams.map((team) => (
                  <TeamCard
                    key={team.id}
                    name={team.name}
                    logo={team.logo}
                    onPress={() => handleTeamPress(team)}
                  />
                ))}
                
                {/* User's Team Section */}
                {userTeams.length > 0 && (
                  <View className="mt-6">
                    <Text className="text-lg font-manrope-bold text-text-primary mb-3">
                      Ваша команда
                    </Text>
                    {userTeams.map((team) => (
                      <TeamCard
                        key={`user-${team.id}`}
                        name={team.name}
                        logo={team.logo}
                        onPress={() => handleTeamPress(team)}
                      />
                    ))}
                  </View>
                )}
              </View>
            )}
          </View>
        </Container>
      </ScrollView>
      
      {/* Create Team Button - Fixed at bottom */}
      {activeTab === 'teams' && (
        <View className="absolute bottom-0 left-0 right-0 bg-white px-4 py-4">
          <Button
            title="Создать Команду"
            onPress={handleCreateTeam}
            variant="primary"
            className="w-full"
            textClassName="font-manrope-bold text-sm"
          />
        </View>
      )}

      {/* Create Team Modal */}
      <CreateTeamModal
        visible={showCreateTeamModal}
        teamName={newTeamName}
        onTeamNameChange={setNewTeamName}
        onSubmit={handleCreateTeamSubmit}
        onClose={handleCloseCreateTeamModal}
      />

      {/* Team Details Modal */}
      <TeamDetailsModal
        visible={showTeamDetailsModal}
        teamName={selectedTeam?.name || ''}
        members={mockTeamMembers}
        isUserOwner={selectedTeam?.isUserOwner || false}
        onClose={handleCloseTeamDetailsModal}
        onOptions={handleTeamOptions}
        onInvite={handleInvite}
        onRemoveMember={handleRemoveMember}
        onLeave={handleLeaveTeam}
      />

      {/* Team Options Modal */}
      <TeamOptionsModal
        visible={showTeamOptionsModal}
        teamName={selectedTeam?.name || ''}
        onClose={() => setShowTeamOptionsModal(false)}
        onChangeAvatar={handleChangeAvatar}
        onDeleteTeam={handleDeleteTeam}
        onLeave={handleLeave}
        onCancel={handleCancel}
      />

      {/* Invite QR Modal */}
      <InviteQRModal
        visible={showInviteQRModal}
        teamName={selectedTeam?.name || ''}
        onClose={handleCloseInviteQRModal}
        onCopyLink={handleCopyLink}
      />
    </SafeAreaView>
  );
}; 
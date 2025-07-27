import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type StadiumListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'StadiumList'
>;

interface Props {
  navigation: StadiumListScreenNavigationProp;
  rootNavigation?: StackNavigationProp<RootStackParamList, 'Main'>;
}

const mockStadiums = [
  { id: 1, name: 'BUNYODKOR', address: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, image: require('../../assets/images/homepage/homepage.png') },
  { id: 2, name: 'BUNYODKOR', address: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, image: require('../../assets/images/homepage/homepage.png') },
  { id: 3, name: 'BUNYODKOR', address: 'Малая кольцевая дорога', distance: '4.9 км от вас', rating: 9.9, image: require('../../assets/images/homepage/homepage.png') },
];

const mockDates = [
  { label: 'Сегодня', value: 'today' },
  { label: 'Завтра', value: 'tomorrow' },
  { label: '11.06', value: '11.06' },
];

export const StadiumListScreen: React.FC<Props> = ({ navigation, rootNavigation }) => {
  const [selectedDate, setSelectedDate] = useState('today');

  const handleDetailPress = () => {
    if (rootNavigation) {
      rootNavigation.navigate('BookingStep1');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <View className="flex-row items-center p-4 justify-between">
        <TouchableOpacity>
          <Text className="text-primary text-base">{'< Back'}</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-text-primary">СПИСОК ПОЛЕЙ</Text>
        <Text className="text-sm text-text-secondary">121 полей</Text>
      </View>
      <View className="flex-row justify-around mb-4">
        {mockDates.map((date) => (
          <TouchableOpacity
            key={date.value}
            className={`flex-1 bg-white border border-primary rounded-lg p-2 mx-1 items-center ${
              selectedDate === date.value ? 'bg-primary' : ''
            }`}
            onPress={() => setSelectedDate(date.value)}
          >
            <Text className={`text-base ${
              selectedDate === date.value ? 'text-white' : 'text-primary'
            }`}>
              {date.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mockStadiums.map((item) => (
          <View key={item.id} className="bg-white rounded-lg m-4 overflow-hidden shadow-sm">
            <Image source={item.image} className="w-full h-40" />
            <View className="p-4">
              <Text className="text-base font-bold text-text-primary mb-1">{item.name}</Text>
              <Text className="text-sm text-text-secondary mb-1">{item.address}</Text>
              <View className="flex-row items-center mb-2">
                <Text className="text-sm text-text-secondary flex-1">{item.distance}</Text>
                <View className="bg-success rounded-lg px-2 py-1">
                  <Text className="text-white text-sm font-bold">{item.rating}</Text>
                </View>
              </View>
              <TouchableOpacity 
                className="bg-primary rounded-lg py-2 items-center mt-2"
                onPress={handleDetailPress}
              >
                <Text className="text-white text-base font-bold">Подробнее</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}; 
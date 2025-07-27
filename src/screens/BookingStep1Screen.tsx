import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type BookingStep1ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BookingStep1'
>;

interface Props {
  navigation: BookingStep1ScreenNavigationProp;
}

const mockStadium = {
  name: 'BUNYODKOR',
  address: 'Малая кольцевая дорога',
  distance: '4.9 км от вас',
  rating: 9.9,
  image: require('../../assets/images/stadium/field.svg'),
  cover: 'Искусственное покрытие',
  type: 'Открытая',
  size: '20x40',
  workTime: '08:00 - 03:00',
  amenities: {
    parking: false,
    locker: true,
    shower: true,
    tribune: true,
    lighting: true,
  },
};
const mockSchedule = [
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: true },
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: false },
];

export const BookingStep1Screen: React.FC<Props> = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('today');

  const handleSubmit = () => {
    navigation.navigate('BookingStep2');
  };

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={mockStadium.image} className="w-full h-44" />
        <View className="flex-row items-center justify-between m-4">
          <Text className="text-lg font-bold text-text-primary">{mockStadium.name}</Text>
          <Text className="bg-success text-white rounded-lg px-2 text-sm font-bold">{mockStadium.rating}</Text>
        </View>
        <Text className="text-sm text-text-secondary mx-4">{mockStadium.address}</Text>
        <Text className="text-sm text-text-secondary mx-4 mb-4">{mockStadium.distance}</Text>
        <View className="flex-row justify-between mx-4 mb-4">
          <View className="flex-1 bg-white rounded-lg p-2 mx-1 items-center">
            <Text className="text-xs text-text-secondary">Покрытие</Text>
            <Text className="text-base font-bold text-text-primary">{mockStadium.cover}</Text>
          </View>
          <View className="flex-1 bg-white rounded-lg p-2 mx-1 items-center">
            <Text className="text-xs text-text-secondary">Тип площадки</Text>
            <Text className="text-base font-bold text-text-primary">{mockStadium.type}</Text>
          </View>
        </View>
        <View className="flex-row justify-between mx-4 mb-4">
          <View className="flex-1 bg-white rounded-lg p-2 mx-1 items-center">
            <Text className="text-xs text-text-secondary">Длина x Ширина (м)</Text>
            <Text className="text-base font-bold text-text-primary">{mockStadium.size}</Text>
          </View>
          <View className="flex-1 bg-white rounded-lg p-2 mx-1 items-center">
            <Text className="text-xs text-text-secondary">Время работы</Text>
            <Text className="text-base font-bold text-text-primary">{mockStadium.workTime}</Text>
          </View>
        </View>
        <Text className="text-lg font-bold text-text-primary mx-4 mt-6 mb-2">РАСПИСАНИЕ:</Text>
        <View className="flex-row justify-around mb-4">
          <TouchableOpacity 
            className={`flex-1 bg-white border border-primary rounded-lg p-2 mx-1 items-center ${
              selectedDate === 'today' ? 'bg-primary' : ''
            }`}
            onPress={() => setSelectedDate('today')}
          >
            <Text className={`text-base ${selectedDate === 'today' ? 'text-white' : 'text-primary'}`}>Сегодня</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className={`flex-1 bg-white border border-primary rounded-lg p-2 mx-1 items-center ${
              selectedDate === 'tomorrow' ? 'bg-primary' : ''
            }`}
            onPress={() => setSelectedDate('tomorrow')}
          >
            <Text className={`text-base ${selectedDate === 'tomorrow' ? 'text-white' : 'text-primary'}`}>Завтра</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white border border-primary rounded-lg p-2 mx-1 items-center">
            <Text className="text-base text-primary">11.06</Text>
          </TouchableOpacity>
        </View>
        <View className="mx-4 mb-4">
          {mockSchedule.map((slot, idx) => (
            <View key={idx} className={`rounded-lg p-3 mb-2 ${
              slot.available ? 'bg-success' : 'bg-gray-200'
            }`}>
              <Text className={`text-base ${slot.available ? 'text-white font-bold' : 'text-text-primary'}`}>
                {slot.time}
              </Text>
              <Text className="text-sm text-text-secondary">
                {slot.available ? 'Свободно' : 'Мест Нет'}
              </Text>
            </View>
          ))}
        </View>
        <Text className="text-lg font-bold text-text-primary mx-4 mt-6 mb-2">УДОБСТВО</Text>
        <View className="flex-row flex-wrap mx-4 mb-2">
          <Text className={`text-sm mr-4 mb-2 ${!mockStadium.amenities.parking ? 'text-gray-400' : 'text-text-primary'}`}>
            Парковка {mockStadium.amenities.parking ? 'Есть' : 'Нет'}
          </Text>
          <Text className="text-sm mr-4 mb-2 text-text-primary">
            Раздевалки {mockStadium.amenities.locker ? 'Есть' : 'Нет'}
          </Text>
          <Text className="text-sm mr-4 mb-2 text-text-primary">
            Душ {mockStadium.amenities.shower ? 'Есть' : 'Нет'}
          </Text>
        </View>
        <View className="flex-row flex-wrap mx-4 mb-4">
          <Text className="text-sm mr-4 mb-2 text-text-primary">
            Трибуны {mockStadium.amenities.tribune ? 'Есть' : 'Нет'}
          </Text>
          <Text className="text-sm mr-4 mb-2 text-text-primary">
            Освещение {mockStadium.amenities.lighting ? 'Есть' : 'Нет'}
          </Text>
        </View>
        <View className="mx-4 mb-6">
          <Text className="text-lg font-bold text-text-primary mb-2">МЕСТОПОЛОЖЕНИЕ:</Text>
          <View className="bg-gray-200 rounded-lg p-4 items-center">
            <Text>Map Placeholder</Text>
          </View>
        </View>
        <TouchableOpacity 
          className="bg-primary rounded-lg mx-4 mb-6 py-4 items-center"
          onPress={handleSubmit}
        >
          <Text className="text-white text-lg font-bold">Отправить заявку</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}; 
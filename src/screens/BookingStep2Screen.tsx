import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type BookingStep2ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BookingStep2'
>;

interface Props {
  navigation: BookingStep2ScreenNavigationProp;
}

const mockBookingDetails = {
  date: '11.06.2025',
  time: '23:30-0:00',
  price: '200.000 Sum',
};

const mockSlots = [
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: true },
  { time: '07:00 AM - 09:00 AM', available: false },
  { time: '07:00 AM - 09:00 AM', available: true },
  { time: '07:00 AM - 09:00 AM', available: false },
];

export const BookingStep2Screen: React.FC<Props> = ({ navigation }) => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const handleSubmit = () => {
    navigation.navigate('BookingStep3');
  };

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-lg font-bold text-text-primary m-4 text-center">Выберите время</Text>
        <View className="flex-row flex-wrap mx-4 mb-4">
          {mockSlots.map((slot, idx) => (
            <TouchableOpacity
              key={idx}
              className={`w-[48%] rounded-lg p-2 m-[1%] items-center ${
                slot.available ? 'bg-success' : 'bg-gray-200'
              } ${selectedSlot === idx ? 'border-2 border-primary' : ''}`}
              disabled={!slot.available}
              onPress={() => setSelectedSlot(idx)}
            >
              <Text className={`text-sm ${
                slot.available ? 'text-white font-bold' : 'text-text-primary'
              } ${selectedSlot === idx ? 'underline' : ''}`}>
                {slot.time}
              </Text>
              <Text className="text-sm text-text-secondary mt-1">
                {slot.available ? 'Свободно' : 'Мест Нет'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="bg-white rounded-lg mx-4 p-4 mb-4">
          <Text className="text-sm text-text-secondary">Дата и время</Text>
          <Text className="text-base text-text-primary mb-2">{mockBookingDetails.date} {mockBookingDetails.time}</Text>
          <Text className="text-sm text-text-secondary">Стоимость</Text>
          <Text className="text-base text-text-primary">{mockBookingDetails.price}</Text>
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
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Input } from '../components/common';

type BookingStep3ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BookingStep3'
>;

interface Props {
  navigation: BookingStep3ScreenNavigationProp;
}

const mockBookingDetails = {
  date: '11.06.2025 23:30-0:00',
  price: '200.000 Sum',
};

export const BookingStep3Screen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    // Navigate back to main screen after successful booking
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView className="flex-1 bg-background-default justify-center items-center">
      <View className="bg-white rounded-2xl p-6 w-[90%] shadow-lg items-center">
        <Text className="text-lg font-bold text-text-primary mb-4">БРОНИРОВАНИЕ</Text>
        <Input
          placeholder="Имя"
          value={name}
          onChangeText={setName}
          className="w-full mb-2"
        />
        <Input
          placeholder="Телефон"
          value={phone}
          onChangeText={setPhone}
          className="w-full mb-2"
        />
        <Text className="text-sm text-text-secondary mt-2">Дата и время</Text>
        <Text className="text-base text-text-primary mb-2">{mockBookingDetails.date}</Text>
        <Text className="text-sm text-text-secondary">Стоимость</Text>
        <Text className="text-base text-text-primary mb-6">{mockBookingDetails.price}</Text>
        <TouchableOpacity 
          className="bg-primary rounded-lg mt-6 items-center py-4 w-full"
          onPress={handleSubmit}
        >
          <Text className="text-white text-lg font-bold">Отправить Заявку</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}; 
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Input } from '../components/common';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
  const { width, height } = Dimensions.get('window');

  const handleSubmit = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BlurView intensity={90} tint="light" style={{ position: 'absolute', width, height, top: 0, left: 0, zIndex: 1 }} />
      <SafeAreaView className="flex-1 justify-center items-center" style={{ zIndex: 2 }}>
        <View
          className="bg-white rounded-2xl p-6 shadow-lg items-center relative"
          style={{ width: 400, maxWidth: '90%' }}
        >
          {/* Close button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', top: 18, right: 18, zIndex: 10 }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <MaterialCommunityIcons name="close" size={32} color="#758A80" />
          </TouchableOpacity>
          {/* Title */}
          <Text className="text-[28px] font-artico-bold text-text-primary mb-6 self-start">БРОНИРОВАНИЕ</Text>
          {/* Inputs */}
          <Input
            placeholder="Имя"
            value={name}
            onChangeText={setName}
            className="w-full mb-4"
          />
          <Input
            placeholder="Телефон"
            value={phone}
            onChangeText={setPhone}
            className="w-full mb-6"
          />
          {/* Details */}
          <View className="w-full mb-6">
            <Text className="font-manrope-bold text-[20px] mb-1">Дата и время</Text>
            <Text className="text-[#758A80] font-manrope-light text-base mb-3">{mockBookingDetails.date}</Text>
            <Text className="font-manrope-bold text-[20px] mb-1">Стоимость</Text>
            <Text className="text-[#758A80] font-manrope-light text-base">{mockBookingDetails.price}</Text>
          </View>
          {/* Button */}
          <TouchableOpacity
            className="bg-primary rounded-lg items-center py-4 w-full mt-2"
            onPress={handleSubmit}
          >
            <Text className="text-white font-manrope-bold text-md">Отправить Заявку</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}; 
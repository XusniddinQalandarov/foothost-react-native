import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Input, SuccessModal } from '../components/common';
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = () => {
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    // Navigate to main screen after showing success
    try {
      navigation.navigate('Main');
    } catch (error) {
      console.error('Navigation error in BookingStep3:', error);
      // Fallback - go back to previous screen
      navigation.goBack();
    }
  };

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: 'transparent', // Navigation handles backdrop now
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16 
    }}>
      <TouchableOpacity 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0 
        }}
        onPress={() => navigation.goBack()}
        activeOpacity={1}
      />
      
      {/* Modal content */}
      <View
        className="bg-white rounded-2xl p-6 shadow-lg items-center relative"
        style={{ width: '100%', maxWidth: 400, zIndex: 1 }}
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
          <Text className="font-manrope-bold text-[14px] text-[#758A80] mb-1">Дата и время</Text>
          <Text className="text-[#758A80] font-manrope-light text-xs mb-3">{mockBookingDetails.date}</Text>
          <Text className="font-manrope-bold text-[14px] text-[#758A80] mb-1">Стоимость</Text>
          <Text className="text-[#758A80] font-manrope-light text-xs">{mockBookingDetails.price}</Text>
        </View>
        
        {/* Button */}
        <TouchableOpacity
          className="bg-primary rounded-lg items-center py-4 w-full mt-2"
          onPress={handleSubmit}
        >
          <Text className="text-white font-manrope-bold text-md">Отправить Заявку</Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <SuccessModal
        visible={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="ЗАЯВКА ОТПРАВЛЕНА"
        message="Ваша заявка на бронирование успешно отправлена. Мы свяжемся с вами в ближайшее время."
      />
    </View>
  );
}; 
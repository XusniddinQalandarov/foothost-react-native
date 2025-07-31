import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Header } from '../components/common';
import LogoWhite from '../../assets/images/logo_white.svg';

type PhoneVerificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PhoneVerification'
>;

type PhoneVerificationScreenRouteProp = RouteProp<
  RootStackParamList,
  'PhoneVerification'
>;

interface Props {
  navigation: PhoneVerificationScreenNavigationProp;
  route: PhoneVerificationScreenRouteProp;
}

export const PhoneVerificationScreen: React.FC<Props> = ({ navigation, route }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resendTime, setResendTime] = useState(39);

  const phoneNumber = route.params?.phoneNumber || '+7 702 517 11 98';

  useEffect(() => {
    const interval = setInterval(() => {
      setResendTime((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (verificationCode: string) => {
    // Mock verification - in real app, you'd verify with backend
    if (verificationCode === '3894') {
      Alert.alert('Success', 'Phone number verified successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Main') }
      ]);
    } else {
      Alert.alert('Error', 'Invalid verification code. Please try again.', [
        { text: 'OK', onPress: () => {
          setCode(['', '', '', '']);
          setCurrentIndex(0);
        }}
      ]);
    }
  };

  const handleResend = () => {
    if (resendTime === 0) {
      setResendTime(39);
      // In real app, you'd resend the SMS here
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      {/* Green Header Section */}
      <View className="bg-primary">
        <View className="pt-8">
          <Header
            left={<LogoWhite width={100} height={40} style={{ marginTop: 16 }} />}
            style={{ backgroundColor: 'transparent' }}
          />
        </View>
        
        {/* Phone Number Section */}
        <View className="px-6 pb-8 mt-6">
          <Text className="text-[28px] font-artico-bold text-white text-center mb-2">
            ПОДТВЕРЖДЕНИЕ НОМЕРА
          </Text>
          <Text className="text-white font-manrope-medium text-[28px] text-center mb-2">{phoneNumber}</Text>
          <Text className="text-white text-xs text-center">
            Мы отправили вам SMS с кодом подтверждения
          </Text>
        </View>
      </View>

      {/* Code Input Display */}
      <View className="flex-1 px-6 pt-8">
        <View className="flex-row justify-center space-x-4 mb-8">
          {code.map((digit, index) => (
            <View
              key={index}
              className={`w-16 h-16 border-2 rounded-lg items-center justify-center ${
                index === currentIndex ? 'border-primary bg-primary/10' : 'border-gray-300'
              }`}
            >
              <Text className="text-2xl font-bold text-text-primary">
                {digit}
              </Text>
            </View>
          ))}
        </View>

        {/* Instructions */}
        <View className="px-6 mb-8">
          <Text className="text-center text-gray-600 text-sm">
            Enter the 4-digit verification code
          </Text>
        </View>

        {/* Resend Timer */}
        <TouchableOpacity
          className={`w-full py-3 rounded-lg ${
            resendTime === 0 ? 'bg-primary' : 'bg-gray-300'
          }`}
          onPress={handleResend}
          disabled={resendTime > 0}
        >
          <Text className={`text-center text-[20px] font-artico-medium ${
            resendTime === 0 ? 'text-white' : 'text-gray-600'
          }`}>
            {resendTime === 0 ? 'RESEND' : `RESEND IN ${formatTime(resendTime)}`}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}; 
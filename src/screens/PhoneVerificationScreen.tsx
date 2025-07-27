import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

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
  const [showNotification, setShowNotification] = useState(false);

  const phoneNumber = route.params?.phoneNumber || '+7 702 517 11 98';

  useEffect(() => {
    // Show notification after 2 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleNumberPress = (num: string) => {
    if (currentIndex < 4) {
      const newCode = [...code];
      newCode[currentIndex] = num;
      setCode(newCode);
      setCurrentIndex(currentIndex + 1);

      // Auto-submit when all digits are entered
      if (currentIndex === 3) {
        const fullCode = newCode.join('');
        handleSubmit(fullCode);
      }
    }
  };

  const handleBackspace = () => {
    if (currentIndex > 0) {
      const newCode = [...code];
      newCode[currentIndex - 1] = '';
      setCode(newCode);
      setCurrentIndex(currentIndex - 1);
    }
  };

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
      setShowNotification(true);
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
      {/* Notification Banner */}
      {showNotification && (
        <View className="bg-green-100 mx-4 mt-4 p-3 rounded-lg">
          <View className="flex-row items-center justify-between">
            <Text className="text-sm font-semibold text-green-800">FOOT HOST</Text>
            <Text className="text-xs text-green-600">1h ago</Text>
          </View>
          <Text className="text-sm text-green-800">3894- ваш код</Text>
        </View>
      )}

      {/* Header */}
      <View className="bg-primary px-6 py-8">
        <Text className="text-lg font-bold text-white mb-2">FOOT HOST</Text>
        <Text className="text-xl font-bold text-white mb-2">ПОДТВЕРЖДЕНИЕ НОМЕРА</Text>
        <Text className="text-white text-lg mb-2">{phoneNumber}</Text>
        <Text className="text-white text-sm">
          Мы отправили вам SMS с кодом подтверждения
        </Text>
      </View>

      {/* Code Input */}
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
              {index === currentIndex && (
                <View className="absolute bottom-2 w-1 h-1 bg-primary rounded-full" />
              )}
            </View>
          ))}
        </View>

        {/* Resend Timer */}
        <TouchableOpacity
          className={`mx-6 py-3 rounded-lg ${
            resendTime === 0 ? 'bg-primary' : 'bg-gray-300'
          }`}
          onPress={handleResend}
          disabled={resendTime > 0}
        >
          <Text className={`text-center font-semibold ${
            resendTime === 0 ? 'text-white' : 'text-gray-600'
          }`}>
            {resendTime === 0 ? 'RESEND' : `RESEND IN ${formatTime(resendTime)}`}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Numeric Keypad */}
      <View className="px-6 pb-8">
        <View className="space-y-4">
          {[
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['', '0', 'backspace']
          ].map((row, rowIndex) => (
            <View key={rowIndex} className="flex-row justify-center space-x-8">
              {row.map((key, keyIndex) => (
                <TouchableOpacity
                  key={keyIndex}
                  className={`w-16 h-16 rounded-full items-center justify-center ${
                    key === 'backspace' ? 'bg-gray-200' : 'bg-gray-100'
                  }`}
                  onPress={() => {
                    if (key === 'backspace') {
                      handleBackspace();
                    } else if (key !== '') {
                      handleNumberPress(key);
                    }
                  }}
                >
                  {key === 'backspace' ? (
                    <MaterialCommunityIcons name="backspace" size={24} color="#757575" />
                  ) : key !== '' ? (
                    <Text className="text-2xl font-semibold text-text-primary">{key}</Text>
                  ) : null}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}; 
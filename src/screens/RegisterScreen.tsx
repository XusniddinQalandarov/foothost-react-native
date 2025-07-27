import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Button, Input, Checkbox } from '../components/common';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.password) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    if (!agreeToTerms) {
      alert('Пожалуйста, согласитесь с условиями');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to phone verification with the phone number
      navigation.navigate('PhoneVerification', {
        phoneNumber: formData.phoneNumber
      });
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="px-6 pt-4 pb-6">
        <View className="flex-row items-center">
          <Text className="text-lg font-bold text-white">FOOT</Text>
          <Text className="text-sm font-bold text-white ml-1">HOST</Text>
        </View>
      </View>

      <ScrollView className="flex-1 bg-white rounded-t-3xl px-6 pt-8" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-text-primary text-center mb-2">
          СОЗДАЙТЕ СВОЙ ID
        </Text>
        <Text className="text-base text-text-secondary text-center mb-8">
          Зови друзей, выбирай время и выходи на матч!
        </Text>

        <View className="flex-1">
          <Input
            placeholder="Имя"
            value={formData.firstName}
            onChangeText={(text) =>
              setFormData({ ...formData, firstName: text })
            }
            autoCapitalize="words"
            className="mb-4"
          />

          <Input
            placeholder="Фамилия"
            value={formData.lastName}
            onChangeText={(text) =>
              setFormData({ ...formData, lastName: text })
            }
            autoCapitalize="words"
            className="mb-4"
          />

          <Input
            placeholder="Номер телефона"
            value={formData.phoneNumber}
            onChangeText={(text) =>
              setFormData({ ...formData, phoneNumber: text })
            }
            keyboardType="phone-pad"
            className="mb-4"
          />

          <Input
            placeholder="Пароль"
            value={formData.password}
            onChangeText={(text) =>
              setFormData({ ...formData, password: text })
            }
            secureTextEntry
            className="mb-4"
          />

          <Text className="text-sm text-text-secondary mb-6 leading-5">
            Пароль должен быть длинной не менее 8 символов и использовать
            1 заглавную букву и 1 символ.
          </Text>

          <View className="mb-6">
            <Checkbox
              checked={agreeToTerms}
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              label="Я согласен с Условиями и Политикой конфиденциальности"
            />
          </View>

          <Button
            title="ЗАРЕГИСТРИРОВАТЬСЯ"
            onPress={handleRegister}
            disabled={!agreeToTerms}
            loading={loading}
            className="mb-4"
          />

          <Text className="text-sm text-text-secondary text-center leading-5 mb-8">
            Соглашаясь с вышеуказанными условиями, вы даете согласие на сбор,
            хранение и обработку ваших персональных данных
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 
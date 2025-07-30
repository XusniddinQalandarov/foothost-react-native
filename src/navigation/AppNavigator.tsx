import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { OnboardingScreen, RegisterScreen, LoginScreen } from '../screens';
import { ProfileScreen } from '../screens/ProfileScreen';
import { PersonalDataScreen } from '../screens/PersonalDataScreen';
import { AboutUsScreen } from '../screens/AboutUsScreen';
import { PhoneVerificationScreen } from '../screens/PhoneVerificationScreen';
import { BookingStep1Screen } from '../screens/BookingStep1Screen';
import { BookingStep3Screen } from '../screens/BookingStep3Screen';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main">
          {(props) => <MainTabNavigator {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="PersonalData" component={PersonalDataScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
        <Stack.Screen name="BookingStep1" component={BookingStep1Screen} />
        <Stack.Screen name="BookingStep3" component={BookingStep3Screen} options={{ presentation: 'transparentModal', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 
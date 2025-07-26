import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { OnboardingScreen, RegisterScreen, LoginScreen } from '../screens';
import { HomeScreen } from '../screens/HomeScreen';
import { StadiumListScreen } from '../screens/StadiumListScreen';
import { BookingStep1Screen } from '../screens/BookingStep1Screen';
import { BookingStep2Screen } from '../screens/BookingStep2Screen';
import { BookingStep3Screen } from '../screens/BookingStep3Screen';
import { MainTabNavigator } from './MainTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  // --- PRODUCTION AUTH LOGIC (commented out for development) ---
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       initialRouteName="Onboarding"
  //       screenOptions={{
  //         headerShown: false,
  //       }}
  //     >
  //       <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  //       <Stack.Screen name="Register" component={RegisterScreen} />
  //       <Stack.Screen name="Login" component={LoginScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );

  // --- DEVELOPMENT NAVIGATION (no auth required) ---
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainTabNavigator} />
        {/* Auth screens for future production use */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 
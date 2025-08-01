import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { MainTabNavigator } from './MainTabNavigator';

// Import your original screens
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { PhoneVerificationScreen } from '../screens/PhoneVerificationScreen';
import { PersonalDataScreen } from '../screens/PersonalDataScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { StadiumListScreen } from '../screens/StadiumListScreen';
import { BookingStep1Screen } from '../screens/BookingStep1Screen';
import { BookingStep3Screen } from '../screens/BookingStep3Screen';
import { TournamentsScreen } from '../screens/TournamentsScreen';
import { TournamentDetailsScreen } from '../screens/TournamentDetailsScreen';
import { MatchRatingScreen } from '../screens/MatchRatingScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AboutUsScreen } from '../screens/AboutUsScreen';

const Stack = createStackNavigator<RootStackParamList>();

// Main App Navigator with all your original FootHost screens
export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        {/* Authentication Flow */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
        <Stack.Screen name="PersonalData" component={PersonalDataScreen} />
        
        {/* Main App Flow */}
        <Stack.Screen name="Main" component={MainTabNavigator} />
        
        {/* Booking Flow */}
        <Stack.Screen name="BookingStep1" component={BookingStep1Screen} />
        <Stack.Screen name="BookingStep3" component={BookingStep3Screen} />
        
        {/* Tournament Flow */}
        <Stack.Screen name="TournamentDetails" component={TournamentDetailsScreen} />
        <Stack.Screen name="MatchRating" component={MatchRatingScreen} />
        
        {/* Other Screens */}
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

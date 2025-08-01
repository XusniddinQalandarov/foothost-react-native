import React from 'react';
import { View, ViewStyle, Platform } from 'react-native';

interface BlurBackdropProps {
  children?: React.ReactNode;
  intensity?: number;
  style?: ViewStyle;
}

export const BlurBackdrop: React.FC<BlurBackdropProps> = ({ 
  children, 
  intensity = 0.7, 
  style 
}) => {
  // For now, we'll use a semi-transparent background
  // This can be enhanced later with proper blur when expo-blur is fixed
  const backdropStyle: ViewStyle = {
    backgroundColor: `rgba(0, 0, 0, ${intensity})`,
    ...style,
  };

  // Future enhancement: Add platform-specific blur effects
  if (Platform.OS === 'ios') {
    // Could use native iOS blur effects here
  } else if (Platform.OS === 'android') {
    // Could use native Android blur effects here
  }

  return (
    <View style={backdropStyle}>
      {children}
    </View>
  );
};

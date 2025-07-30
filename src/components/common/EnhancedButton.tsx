import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import * as Haptics from 'expo-haptics';

interface EnhancedButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  hapticFeedback?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  hapticFeedback = true,
  style,
  textStyle,
}) => {
  const handlePress = () => {
    if (hapticFeedback) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };

  const getButtonClasses = () => {
    const baseClasses = 'rounded-lg justify-center items-center';
    
    // Size classes
    const sizeClasses = {
      small: 'h-10 px-4',
      medium: 'h-14 px-6',
      large: 'h-16 px-8',
    };
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-primary',
      secondary: 'bg-gray-200',
      outline: 'bg-transparent border border-primary',
    };
    
    const disabledClasses = disabled ? 'bg-gray-300' : '';
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`;
  };

  const getTextClasses = () => {
    const baseClasses = 'font-semibold text-center';
    
    // Size classes
    const sizeClasses = {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    };
    
    // Variant classes
    const variantClasses = {
      primary: 'text-white',
      secondary: 'text-text-primary',
      outline: 'text-primary',
    };
    
    const disabledClasses = disabled ? 'text-gray-500' : '';
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`;
  };

  return (
    <TouchableOpacity
      className={getButtonClasses()}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={style}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : '#45AF31'} />
      ) : (
        <Text className={getTextClasses()} style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}; 
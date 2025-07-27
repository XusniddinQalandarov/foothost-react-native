import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  className = '',
  textClassName = '',
}) => {
  const getButtonClasses = () => {
    const baseClasses = 'h-14 rounded-lg justify-center items-center px-6';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-primary ${className}`;
      case 'secondary':
        return `${baseClasses} bg-gray-200 ${className}`;
      case 'outline':
        return `${baseClasses} bg-transparent border border-primary ${className}`;
      default:
        return `${baseClasses} bg-primary ${className}`;
    }
  };

  const getTextClasses = () => {
    const baseClasses = 'text-base font-semibold';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} text-white ${textClassName}`;
      case 'secondary':
        return `${baseClasses} text-text-primary ${textClassName}`;
      case 'outline':
        return `${baseClasses} text-primary ${textClassName}`;
      default:
        return `${baseClasses} text-white ${textClassName}`;
    }
  };

  return (
    <TouchableOpacity
      className={getButtonClasses()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#4CAF50'} />
      ) : (
        <Text className={getTextClasses()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}; 
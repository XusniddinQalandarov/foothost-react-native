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
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#45AF31'} />
      ) : (
        <Text className={getTextClasses()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

// Login Button - matches OnboardingScreen style
interface LoginButtonProps {
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  onPress,
  loading = false,
  disabled = false,
  className = '',
}) => {
  return (
    <Button
      title="LOGIN"
      onPress={onPress}
      variant="primary"
      loading={loading}
      disabled={disabled}
      textClassName="font-artico-medium text-xl"
      className={className}
    />
  );
};

// Register Button - matches OnboardingScreen style
interface RegisterButtonProps {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({
  onPress,
  disabled = false,
  loading = false,
  className = '',
}) => {
  return (
    <TouchableOpacity
      className={`w-full bg-[#0000000D] border border-[#0000000D] rounded-lg py-4 items-center ${className}`}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#45AF31" />
      ) : (
        <Text className="text-lg font-artico-medium">ЗАРЕГИСТРИРОВАТЬСЯ</Text>
      )}
    </TouchableOpacity>
  );
}; 
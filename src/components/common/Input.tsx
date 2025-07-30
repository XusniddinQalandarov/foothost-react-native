import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TextInputProps,
} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`mb-4 ${className}`}>
      {label && <Text className="text-sm font-manrope-medium text-text-primary mb-1">{label}</Text>}
      <TextInput
        className={`h-14 border border-[#F4F4F4] rounded-lg px-4 text-base bg-[#F4F4F4] text-text-placeholder ${
          isFocused ? 'border-primary' : ''
        } ${error ? 'border-error' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#A8A8A8"
        style={style}
        {...props}
      />
      {error && <Text className="text-sm text-error mt-1">{error}</Text>}
    </View>
  );
}; 
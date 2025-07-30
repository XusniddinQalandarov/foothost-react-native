import React from 'react';
import { View, ViewProps } from 'react-native';

interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  safe?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  padding = 'md', 
  safe = false,
  className = '',
  ...props 
}) => {
  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'px-4 py-2';
      case 'md':
        return 'px-6 py-4';
      case 'lg':
        return 'px-8 py-6';
      default:
        return 'px-6 py-6';
    }
  };

  return (
    <View 
      className={`flex-1 ${getPaddingClasses()} ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}; 
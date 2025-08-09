import React from 'react';
import { View, ViewProps } from 'react-native';

interface SvgWrapperProps extends ViewProps {
  width?: number;
  height?: number;
  color?: string;
  children?: React.ReactNode;
}

export const SvgWrapper: React.FC<SvgWrapperProps> = ({ 
  width = 24, 
  height = 24, 
  color = '#000',
  children,
  style,
  ...props
}) => {
  return (
    <View 
      style={[
        { 
          width, 
          height, 
          backgroundColor: color, 
          opacity: 0.1,
          borderRadius: 2
        },
        style
      ]}
      {...props}
    >
      {children}
    </View>
  );
};


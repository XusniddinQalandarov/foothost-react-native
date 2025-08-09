import React from 'react';
import { View, Text } from 'react-native';

// Simple fallback component for SVG issues
export const SimpleSvg: React.FC<{ 
  width?: number; 
  height?: number; 
  color?: string;
  testId?: string;
}> = ({ 
  width = 24, 
  height = 24, 
  color = '#45AF31',
  testId = 'svg-fallback'
}) => {
  return (
    <View 
      testID={testId}
      style={{ 
        width, 
        height, 
        backgroundColor: color, 
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>
        SVG
      </Text>
    </View>
  );
};



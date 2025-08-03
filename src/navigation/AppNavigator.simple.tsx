import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Simple temporary navigator that doesn't require native modules
export const AppNavigator: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football App</Text>
      <Text style={styles.subtitle}>Navigation will be restored step by step</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Onboarding (Coming Soon)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login (Coming Soon)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register (Coming Soon)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#45AF31',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

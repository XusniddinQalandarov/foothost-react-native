import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Button } from '../components/common';
import { colors, typography, spacing, commonStyles } from '../styles';

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

export const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/400x600/4CAF50/FFFFFF?text=Football+Player' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>FOOT</Text>
              <Text style={styles.logoSubText}>HOST</Text>
            </View>
          </View>
          
          <View style={styles.content}>
            <Text style={styles.title}>{`ФУТБОЛ ДЛЯ ВСЕХ\nНАЙДИ ПОЛЕ И\nИГРАЙ!`}</Text>
            <Text style={styles.subtitle}>{`Зови друзей, выбирай время и\nвыходи на матч!`}</Text>
            
            <View style={styles.buttonContainer}>
              <Button
                title="LOGIN"
                onPress={() => navigation.navigate('Login')}
                variant="primary"
                style={styles.loginButton}
              />
              <Button
                title="ЗАРЕГИСТРИРОВАТЬСЯ"
                onPress={() => navigation.navigate('Register')}
                variant="outline"
                style={styles.registerButton}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  logoContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  logoSubText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginLeft: spacing.xs,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
    lineHeight: typography.fontSize['4xl'] * 1.2,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    marginBottom: spacing['3xl'],
    lineHeight: typography.fontSize.base * 1.4,
  },
  buttonContainer: {
    gap: spacing.md,
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  registerButton: {
    borderColor: colors.text.primary,
  },
}); 
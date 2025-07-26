import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Button, Input, Checkbox } from '../components/common';
import { useFormValidation } from '../hooks/useFormValidation';
import { useApi } from '../hooks/useApi';
import { apiService } from '../services/api';
import { colors, typography, spacing } from '../styles';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

export const RegisterScreenEnhanced: React.FC<Props> = ({ navigation }) => {
  const {
    values,
    errors,
    touched,
    setValue,
    setFieldTouched,
    validateForm,
  } = useFormValidation({
    firstName: {
      value: '',
      rules: { required: true, name: true },
    },
    lastName: {
      value: '',
      rules: { required: true, name: true },
    },
    email: {
      value: '',
      rules: { required: true, email: true },
    },
    password: {
      value: '',
      rules: { required: true, password: true },
    },
  });

  const [agreeToTerms, setAgreeToTerms] = React.useState(false);
  const registerApi = useApi();

  const handleRegister = async () => {
    if (!validateForm()) {
      Alert.alert('Validation Error', 'Please fix the errors in the form');
      return;
    }

    if (!agreeToTerms) {
      Alert.alert('Agreement Required', 'Please agree to the terms and conditions');
      return;
    }

    const result = await registerApi.execute(() =>
      apiService.register({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      })
    );

    if (result) {
      Alert.alert('Success', 'Registration successful!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } else if (registerApi.error) {
      Alert.alert('Registration Failed', registerApi.error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.lg,
    },
    logo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logoText: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.bold,
      color: colors.white,
    },
    logoSubText: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.bold,
      color: colors.white,
      marginLeft: spacing.xs,
    },
    content: {
      flex: 1,
      backgroundColor: colors.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.xl,
    },
    title: {
      fontSize: typography.fontSize['2xl'],
      fontWeight: typography.fontWeight.bold,
      color: colors.text.primary,
      textAlign: 'center',
      marginBottom: spacing.sm,
    },
    subtitle: {
      fontSize: typography.fontSize.base,
      color: colors.text.secondary,
      textAlign: 'center',
      marginBottom: spacing.xl,
    },
    form: {
      flex: 1,
    },
    passwordHint: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      marginBottom: spacing.lg,
      lineHeight: typography.fontSize.sm * 1.4,
    },
    registerButton: {
      marginTop: spacing.lg,
      marginBottom: spacing.md,
    },
    agreementText: {
      fontSize: typography.fontSize.sm,
      color: colors.text.secondary,
      textAlign: 'center',
      lineHeight: typography.fontSize.sm * 1.4,
      marginBottom: spacing.xl,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>FOOT</Text>
          <Text style={styles.logoSubText}>BEST</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>СОЗДАЙТЕ СВОЙ ID</Text>
        <Text style={styles.subtitle}>
          Зови друзей, выбирай время и выходи на матч!
        </Text>

        <View style={styles.form}>
          <Input
            placeholder="First Name"
            value={values.firstName}
            onChangeText={(text) => setValue('firstName', text)}
            onBlur={() => setFieldTouched('firstName')}
            error={touched.firstName ? errors.firstName : undefined}
            autoCapitalize="words"
          />

          <Input
            placeholder="Last Name"
            value={values.lastName}
            onChangeText={(text) => setValue('lastName', text)}
            onBlur={() => setFieldTouched('lastName')}
            error={touched.lastName ? errors.lastName : undefined}
            autoCapitalize="words"
          />

          <Input
            placeholder="Email"
            value={values.email}
            onChangeText={(text) => setValue('email', text)}
            onBlur={() => setFieldTouched('email')}
            error={touched.email ? errors.email : undefined}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Password"
            value={values.password}
            onChangeText={(text) => setValue('password', text)}
            onBlur={() => setFieldTouched('password')}
            error={touched.password ? errors.password : undefined}
            secureTextEntry
          />

          <Text style={styles.passwordHint}>
            Пароль должен быть длинной не менее 8 символов и использовать
            1 заглавную букву и 1 символ.
          </Text>

          <Checkbox
            checked={agreeToTerms}
            onPress={() => setAgreeToTerms(!agreeToTerms)}
            label="Я согласен с Условиями и Политикой конфиденциальности"
          />

          <Button
            title="ЗАРЕГИСТРИРОВАТЬСЯ"
            onPress={handleRegister}
            loading={registerApi.loading}
            style={styles.registerButton}
          />

          <Text style={styles.agreementText}>
            Соглашаясь с вышеуказанными условиями, вы даете согласие на сбор,
            хранение и обработку ваших персональных данных
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles remain the same as in the original RegisterScreen
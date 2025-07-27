import { useState, useCallback } from 'react';
import { validateEmail, validatePassword, validateName } from '../utils/validation';

interface ValidationRules {
  required?: boolean;
  email?: boolean;
  password?: boolean;
  name?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface FieldConfig {
  value: string;
  rules: ValidationRules;
}

interface FormConfig {
  [key: string]: FieldConfig;
}

export const useFormValidation = (initialConfig: FormConfig) => {
  const [values, setValues] = useState<{ [key: string]: string }>(() =>
    Object.keys(initialConfig).reduce((acc, key) => {
      acc[key] = initialConfig[key].value;
      return acc;
    }, {} as { [key: string]: string })
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = useCallback(
    (fieldName: string, value: string): string => {
      const rules = initialConfig[fieldName]?.rules;  
      if (!rules) return '';

      if (rules.required && !value.trim()) {
        return 'This field is required';
      }

      if (rules.email && value && !validateEmail(value)) {
        return 'Please enter a valid email address';
      }

      if (rules.password && value && !validatePassword(value)) {
        return 'Password must be at least 8 characters with 1 uppercase letter and 1 special character';
      }

      if (rules.name && value && !validateName(value)) {
        return 'Name must be at least 2 characters long';
      }

      if (rules.minLength && value.length < rules.minLength) {
        return `Must be at least ${rules.minLength} characters long`;
      }

      if (rules.maxLength && value.length > rules.maxLength) {
        return `Must be no more than ${rules.maxLength} characters long`;
      }

      return '';
    },
    [initialConfig]
  );

  const setValue = useCallback(
    (fieldName: string, value: string) => {
      setValues((prev) => ({ ...prev, [fieldName]: value }));
      
      if (touched[fieldName]) {
        const error = validateField(fieldName, value);
        setErrors((prev) => ({ ...prev, [fieldName]: error }));
      }
    },
    [validateField, touched]
  );

  const setFieldTouched = useCallback(
    (fieldName: string) => {
      setTouched((prev) => ({ ...prev, [fieldName]: true }));
      const error = validateField(fieldName, values[fieldName]);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    },
    [validateField, values]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(initialConfig).forEach((fieldName) => {
      const error = validateField(fieldName, values[fieldName]);
      newErrors[fieldName] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(initialConfig).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {} as { [key: string]: boolean })
    );

    return isValid;
  }, [initialConfig, validateField, values]);

  const reset = useCallback(() => {
    setValues(
      Object.keys(initialConfig).reduce((acc, key) => {
        acc[key] = initialConfig[key].value;
        return acc;
      }, {} as { [key: string]: string })
    );
    setErrors({});
    setTouched({});
  }, [initialConfig]);

  return {
    values,
    errors,
    touched,
    setValue,
    setFieldTouched,
    validateForm,
    reset,
  };
}; 
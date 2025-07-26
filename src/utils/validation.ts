// Email validation: simple regex
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Password validation: at least 8 chars, 1 uppercase, 1 special char
export function validatePassword(password: string): boolean {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

// Name validation: at least 2 characters
export function validateName(name: string): boolean {
  return name.trim().length >= 2;
} 
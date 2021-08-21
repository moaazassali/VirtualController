import { StyleSheet } from 'react-native';

export const darkThemeProps = {
  primary: '#bb86fc',
  primaryVariant: '#3700b3',
  secondary: '#03dac6',
  secondaryVariant: '#03dac6',
  background: '#121212',
  surface: '#121212',
  error: '#cf6679',
  onPrimary: '#000',
  onSecondary: '#000',
  onBackground: '#fff',
  onSurface: '#fff',
  onError: '#000',
};

export const lightThemeProps = {
  primary: '#6200ee',
  primaryVariant: '#3700b3',
  secondary: '#03dac6',
  secondaryVariant: '#018786',
  background: '#fff',
  surface: '#fff',
  error: '#b00020',
  onPrimary: '#fff',
  onSecondary: '#000',
  onBackground: '#000',
  onSurface: '#000',
  onError: '#fff',
};

export const overlayProps = {
  dp1: {
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  dp2: {
    backgroundColor: 'rgba(255,255,255,0.07)',
  },
  dp3: {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  dp4: {
    backgroundColor: 'rgba(255,255,255,0.09)',
  },
  dp6: {
    backgroundColor: 'rgba(255,255,255,0.11)',
  },
  dp8: {
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  dp12: {
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
  dp16: {
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  dp24: {
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
};

export const textProps = {
  emphasis: {
    high: 'rgba(255,255,255,0.87)',
    medium: 'rgba(255,255,255,0.6)',
    low: 'rgba(255,255,255,0.38)',
  },
  size: {
    xl: 24,
    l: 20,
    m: 16,
    s: 12,
  },
  weight: {
    normal: '500',
    bold: '700',
  },
};

export const stateStyles = {
  pressing: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
};

export const textStyles = StyleSheet.create({
  card_title: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.xl,
    fontWeight: '800',
  },
  button: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.l,
    fontWeight: 'bold',
  },
  standard: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.m,
  },
});

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: overlayProps.dp1.backgroundColor,
    padding: 20,
    borderRadius: 5,
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: darkThemeProps.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const textInputStyles = StyleSheet.create({
  textInput: {
    backgroundColor: overlayProps.dp6.backgroundColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: textProps.size.m,
  },
});

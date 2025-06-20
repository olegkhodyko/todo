import { StyleSheet } from 'react-native';
import theme from '@theme';

export default StyleSheet.create({
  button: {
    backgroundColor: theme.colors.border.tertiary,
    paddingVertical: 12,
    borderRadius: 20,
    width: 100,
  },
  buttonActive: {
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonTextActive: {
    color: theme.colors.text.inverse,
  },
});

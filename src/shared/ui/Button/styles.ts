import { StyleSheet } from 'react-native';
import theme from '@theme';

export default StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  buttonPrimary: {
    backgroundColor: theme.colors.primary,
  },
  buttonPrimaryText: {
    color: theme.colors.text.inverse,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: theme.colors.state.disabled,
  },
  buttonSecondaryText: {
    color: theme.colors.text.inverse,
    fontSize: 16,
    fontWeight: '600',
  },
});

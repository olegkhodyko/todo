import { StyleSheet } from 'react-native';
import theme from '@theme';

export default StyleSheet.create({
  button: {
    backgroundColor: theme.colors.state.hover,
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 36,
    minHeight: 36,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
});

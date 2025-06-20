import { StyleSheet } from 'react-native';
import theme from '@theme';

export default StyleSheet.create({
  input: {
    backgroundColor: theme.colors.background.secondary,
    borderWidth: 1,
    borderColor: theme.colors.border.secondary,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: theme.colors.text.primary,
  },
});

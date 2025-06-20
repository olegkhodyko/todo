import { StyleSheet } from 'react-native';
import theme from '@theme';

export default StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: theme.colors.border.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  checkmark: {
    color: theme.colors.text.inverse,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

import theme from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: theme.colors.neutralGray,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primaryBlue,
    borderColor: theme.colors.primaryBlue,
  },
  checkboxMark: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});

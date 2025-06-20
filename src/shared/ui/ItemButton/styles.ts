import theme from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  smallButton: {
    backgroundColor: theme.colors.light,
    borderRadius: 6,
    padding: 6,
    minWidth: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButtonText: {
    fontSize: 16,
  },
});

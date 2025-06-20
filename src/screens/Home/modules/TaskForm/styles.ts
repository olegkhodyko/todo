import { StyleSheet } from 'react-native';
import theme from '@theme';

export default StyleSheet.create({
  form: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: theme.colors.border.primary,
    gap: 16,
  },
  descriptionInput: {
    height: 60,
  },
});

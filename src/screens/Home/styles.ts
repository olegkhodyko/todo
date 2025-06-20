import { StyleSheet } from 'react-native';
import theme from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    paddingVertical: 40,
    gap: 12,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});

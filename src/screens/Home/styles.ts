import theme from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground,
    padding: 16,
    paddingTop: 40,
    paddingBottom: 40,
    gap: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: theme.colors.darkGray,
    textAlign: 'center',
  },
});

import theme from '@theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  taskContainer: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  taskDone: {
    backgroundColor: '#d1fae5',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  taskDoneText: {
    color: theme.colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  taskDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskMuted: {
    opacity: 0,
  },
});

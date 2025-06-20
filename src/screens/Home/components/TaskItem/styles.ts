import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center',
    shadowColor: '#000',
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
    color: '#111827',
  },
  taskDoneText: {
    color: '#6b7280',
    textDecorationLine: 'line-through',
  },
  taskDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  smallButton: {
    marginLeft: 10,
    backgroundColor: '#e0e7ff',
    borderRadius: 6,
    padding: 6,
    minWidth: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButtonText: {
    fontSize: 16,
    color: '#1e40af',
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

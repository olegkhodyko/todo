import theme from '@theme';
import { StyleSheet } from 'react-native';
import {
  TASK_ITEM_HEIGHT,
  TASK_ITEM_PADDING,
  TASK_ITEM_BORDER_RADIUS,
} from '@screens/Home/constants/dimensions';

export default StyleSheet.create({
  taskContainer: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: theme.colors.background.secondary,
    padding: TASK_ITEM_PADDING,
    marginHorizontal: 16,
    borderRadius: TASK_ITEM_BORDER_RADIUS,
    height: TASK_ITEM_HEIGHT,
    shadowColor: theme.colors.shadow.color,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: theme.colors.shadow.opacity,
    shadowRadius: 4,
    elevation: 3,
  },
  taskDone: {
    backgroundColor: theme.colors.background.success,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 20,
  },
  taskDoneText: {
    textDecorationLine: 'line-through',
    color: theme.colors.text.secondary,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 12,
  },
});

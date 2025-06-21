import { StyleSheet } from 'react-native';
import { TASK_ITEM_GAP } from '@screens/Home/constants/dimensions';

export default StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    gap: TASK_ITEM_GAP,
    paddingVertical: TASK_ITEM_GAP,
  },
});

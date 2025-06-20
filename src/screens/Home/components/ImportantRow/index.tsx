import React, { FC, memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Checkbox } from '@shared/ui';
import { taskFormStore } from '@screens/Home/store';
import styles from './styles';

const ImportantRow: FC = () => {
  const toggleImportant = taskFormStore(state => state.toggleImportant);
  const important = taskFormStore(state => state.important);

  return (
    <TouchableOpacity
      style={styles.importantRow}
      onPress={toggleImportant}
      activeOpacity={1}
    >
      <Checkbox important={important} toggle={toggleImportant} />
      <Text>Important task</Text>
    </TouchableOpacity>
  );
};
export default memo(ImportantRow);

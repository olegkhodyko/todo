import React, { FC, memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Checkbox } from '@shared/ui';
import { taskStore } from '@screens/Home/store';
import styles from './styles';

const ImportantRow: FC = () => {
  const toggleImportant = taskStore(state => state.toggleImportant);
  const important = taskStore(state => state.important);

  return (
    <TouchableOpacity style={styles.importantRow} onPress={toggleImportant} activeOpacity={1}>
      <Checkbox important={important} toggle={toggleImportant} />
      <Text>Important task</Text>
    </TouchableOpacity>
  );
};
export default memo(ImportantRow);

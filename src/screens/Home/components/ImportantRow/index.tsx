import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';
import { Checkbox } from '@shared/ui';
import { taskStore } from '@screens/Home/store';
import styles from './styles';

const ImportantRow: FC = () => {
  const toggleImportant = taskStore(state => state.toggleImportant);
  const important = taskStore(state => state.important);

  return (
    <View style={styles.importantRow}>
      <Checkbox important={important} toggle={toggleImportant} />
      <Text>Important task</Text>
    </View>
  );
};
export default memo(ImportantRow);

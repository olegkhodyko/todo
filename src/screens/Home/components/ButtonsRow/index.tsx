import React, { FC } from 'react';
import { View } from 'react-native';
import { Button } from '@shared/ui';
import { taskFormStore } from '@screens/Home/store';
import styles from './styles';

interface ButtonsRowProps {
  saveTask: () => void;
}

const ButtonsRow: FC<ButtonsRowProps> = ({ saveTask }) => {
  const editingTask = taskFormStore(state => state.editingTask);
  const cancelEdit = taskFormStore(state => state.cancelEdit);

  return (
    <View style={styles.buttonsRow}>
      <Button title={editingTask ? 'Save' : 'Add'} onPress={saveTask} />
      {editingTask && (
        <Button title="Cancel" variant="secondary" onPress={cancelEdit} />
      )}
    </View>
  );
};

export default ButtonsRow;

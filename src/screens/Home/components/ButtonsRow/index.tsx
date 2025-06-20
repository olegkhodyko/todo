import React, { FC } from 'react';
import { View } from 'react-native';
import { Button } from '@shared/ui';
import { taskStore } from '@screens/Home/store';
import styles from './styles';

interface ButtonsRowProps {
  saveTask: () => void;
}

const ButtonsRow: FC<ButtonsRowProps> = ({ saveTask }) => {
  const editingTask = taskStore(state => state.editingTask);
  const cancelEdit = taskStore(state => state.cancelEdit);

  return (
    <View style={styles.buttonsRow}>
      <Button title={editingTask ? 'Save' : 'Add'} onPress={saveTask} />
      {editingTask && (
        <Button title="Cancel" variant="[md-gray]" onPress={cancelEdit} />
      )}
    </View>
  );
};

export default ButtonsRow;

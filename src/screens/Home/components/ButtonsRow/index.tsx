import React, { FC } from 'react';
import { View } from 'react-native';
import { Button } from '@shared/ui';
import { useTaskForm } from '@screens/Home/store/form';
import styles from './styles';

interface TaskFormProps {
  saveTask: () => void;
}

const ButtonsRow: FC<TaskFormProps> = ({ saveTask }) => {
  const editingTask = useTaskForm(state => state.editingTask);
  const cancelEdit = useTaskForm(state => state.cancelEdit);

  return (
    <View style={styles.buttonsRow}>
      <Button title={editingTask ? 'Save' : 'Add'} onPress={saveTask} />
      {editingTask && <Button title="Cancel" onPress={cancelEdit} />}
    </View>
  );
};

export default ButtonsRow;

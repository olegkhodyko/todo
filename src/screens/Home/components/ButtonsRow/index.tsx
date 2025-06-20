import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button } from '@shared/ui';

interface ButtonsRowProps {
  editingTask: boolean;
  saveTask: () => void;
  cancelEdit: () => void;
}

const ButtonsRow: FC<ButtonsRowProps> = ({
  editingTask,
  saveTask,
  cancelEdit,
}) => (
  <View style={styles.buttonsRow}>
    <Button title={editingTask ? 'Save' : 'Add'} onPress={saveTask} />
    {editingTask && <Button title="Cancel" onPress={cancelEdit} />}
  </View>
);

export default ButtonsRow;

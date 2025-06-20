import React, { FC } from 'react';
import { View } from 'react-native';
import { Task } from '@shared/types/tasks';
import { ItemButton } from '@shared/ui';
import { taskStore } from '@screens/Home/store';
import styles from './styles';

interface TaskActionsProps {
  task: Task;
  isLoading: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
const TaskActions: FC<TaskActionsProps> = ({
  task,
  isLoading,
  onToggle,
  onDelete,
}) => {
  const onEdit = taskStore(state => state.startEdit);

  return (
    <View style={styles.buttonsRow}>
      <ItemButton
        content={task.done ? '↺' : '✓'}
        action={() => onToggle(task._id)}
        isLoading={isLoading}
      />
      <ItemButton
        content="✎"
        action={() => onEdit(task)}
        isLoading={isLoading}
      />
      <ItemButton
        content="🗑"
        action={() => onDelete(task._id)}
        isLoading={isLoading}
      />
    </View>
  );
};

export default TaskActions;

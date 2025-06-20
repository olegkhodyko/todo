import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { Task } from '@shared/types/tasks';
import ButtonsLine from './TaskActions';
import TaskContent from './TaskContent';
import styles from './styles';

interface TaskItemProps {
  task: Task;
  isLoading: boolean;
  toggleDone: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: FC<TaskItemProps> = ({
  task,
  isLoading,
  toggleDone,
  deleteTask,
}) => (
  <View
    style={[
      styles.taskItem,
      task.done && styles.taskDone,
      isLoading && styles.taskMuted,
    ]}
    pointerEvents={isLoading ? 'none' : 'auto'}
  >
    <TaskContent task={task} />
    <ButtonsLine
      task={task}
      isLoading={isLoading}
      onToggle={toggleDone}
      onDelete={deleteTask}
    />
  </View>
);

export default memo(TaskItem);

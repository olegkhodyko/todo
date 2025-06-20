import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Task } from '@shared/types/tasks';
import styles from './styles';

interface TaskContentProps {
  task: Task;
}

const TaskContent: FC<TaskContentProps> = ({ task }) => (
  <View style={styles.taskContainer}>
    <Text style={[styles.taskTitle, task.done && styles.taskDoneText]}>
      {task.title} {task.important && '⭐'}
    </Text>
    {task.description && (
      <Text style={[styles.taskDescription, task.done && styles.taskDoneText]}>
        {task.description}
      </Text>
    )}
  </View>
);

export default TaskContent;

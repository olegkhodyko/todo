import { Task } from '@shared/types/tasks';
import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface TaskItemProps {
  task: Task;
  startEdit: (task: Task) => void;
  toggleDone: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: FC<TaskItemProps> = ({
  task,
  startEdit,
  toggleDone,
  deleteTask,
}) => {
  console.log(task.id);
  return (
    <View style={[styles.taskItem, task.done && styles.taskDone]}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.taskTitle, task.done && styles.taskDoneText]}>
          {task.title} {task.important && '⭐'}
        </Text>
        {task.description ? (
          <Text
            style={[styles.taskDescription, task.done && styles.taskDoneText]}
          >
            {task.description}
          </Text>
        ) : null}
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => toggleDone(task.id)}
        >
          <Text style={styles.smallButtonText}>{task.done ? '↺' : '✓'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => startEdit(task)}
        >
          <Text style={styles.smallButtonText}>✎</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => deleteTask(task.id)}
        >
          <Text style={[styles.smallButtonText, { color: 'red' }]}>🗑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default memo(TaskItem);

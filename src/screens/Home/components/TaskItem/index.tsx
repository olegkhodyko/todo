import { Task } from '@shared/types/api';
import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTaskForm } from '@screens/Home/store/form';
import styles from './styles';

interface TaskItemProps {
  task: Task;
  isLoading: boolean;
  toggleDone: (id: Task['_id']) => void;
  deleteTask: (id: Task['_id']) => void;
}

const TaskItem: FC<TaskItemProps> = ({
  task,
  isLoading,
  toggleDone,
  deleteTask,
}) => {
  const startEdit = useTaskForm(state => state.startEdit);

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
          onPress={() => toggleDone(task._id)}
          disabled={isLoading}
        >
          <Text style={styles.smallButtonText}>{task.done ? '↺' : '✓'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => startEdit(task)}
          disabled={isLoading}
        >
          <Text style={styles.smallButtonText}>✎</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => deleteTask(task._id)}
          disabled={isLoading}
        >
          <Text style={[styles.smallButtonText, { color: 'red' }]}>🗑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default memo(TaskItem);

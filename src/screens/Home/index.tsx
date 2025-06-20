import React, { useCallback, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Task } from '@shared/types/tasks';
import { useTasks } from './hooks';
import { TaskForm, TaskList, FilterRow } from './modules';
import styles from './styles';

export default function TaskApp() {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleDone,
    filter,
    setFilter,
  } = useTasks();

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [important, setImportant] = useState<boolean>(false);

  const toggleImportant = useCallback(() => {
    setImportant(prev => !prev);
  }, []);

  const saveTask = () => {
    if (!title.trim()) {
      Alert.alert('Error!', 'Task name field cant be empty!');
      return;
    }

    if (editingTask) {
      updateTask({
        ...editingTask,
        title,
        description,
        important,
      });
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        title,
        description,
        important,
        done: false,
      };
      addTask(newTask);
    }
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
    setImportant(false);
  };

  const startEdit = useCallback((task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setImportant(task.important);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My tasks</Text>
      <FilterRow filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={tasks}
        startEdit={startEdit}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
      />
      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        important={important}
        toggleImportant={toggleImportant}
        editingTask={editingTask}
        saveTask={saveTask}
        cancelEdit={cancelEdit}
      />
    </View>
  );
}

import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FilterRow, TaskForm, TaskList } from '@screens/Home/modules';
import { ErrorContent } from '@shared/layout';
import { useTasks } from '@screens/Home/hooks';
import styles from './styles';

export default function TaskApp() {
  const {
    isFetching,
    isLoading,
    error,
    data,
    deleteTask,
    toggleDone,
    saveTask,
  } = useTasks();

  if (isFetching) return <ActivityIndicator size="large" />;
  if (error) return <ErrorContent error={error.message} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My tasks</Text>
      <FilterRow />
      <TaskList
        data={data}
        deleteTask={deleteTask}
        toggleDone={toggleDone}
        isLoading={isLoading}
      />
      <TaskForm saveTask={saveTask} />
    </View>
  );
}

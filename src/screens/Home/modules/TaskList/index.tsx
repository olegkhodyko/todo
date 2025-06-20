import React, { FC } from 'react';
import { EmptyList, TaskItem } from '@screens/Home/components';
import { Task } from '@shared/types/tasks';
import { FlatList, StyleSheet } from 'react-native';

interface TaskListProps {
  tasks: Task[];
  startEdit: (task: Task) => void;
  toggleDone: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({
  tasks,
  startEdit,
  toggleDone,
  deleteTask,
}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          startEdit={startEdit}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
        />
      )}
      style={styles.list}
      ListEmptyComponent={<EmptyList />}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
});

export default TaskList;

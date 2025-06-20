import React, { FC, useCallback } from 'react';
import { EmptyList, TaskItem } from '@screens/Home/components';
import { FlatList } from 'react-native';
import { taskStore } from '@screens/Home/store';
import { Task } from '@shared/types/tasks';
import styles from './styles';

interface TaskListProps {
  data: Task[];
  isLoading: boolean;
  toggleDone: (id: Task['_id']) => void;
  deleteTask: (id: Task['_id']) => void;
}

const TaskList: FC<TaskListProps> = ({
  data,
  isLoading,
  toggleDone,
  deleteTask,
}) => {
  const filterType = taskStore(state => state.filterType);

  const filteredData = React.useMemo(() => {
    if (filterType === 'important') return data.filter(t => t.important);
    return data;
  }, [data, filterType]);

  const renderItem = useCallback(
    ({ item }: { item: Task }) => (
      <TaskItem
        isLoading={isLoading}
        task={item}
        toggleDone={toggleDone}
        deleteTask={deleteTask}
      />
    ),
    [],
  );

  return (
    <FlatList
      data={filteredData}
      keyExtractor={item => item._id}
      renderItem={renderItem}
      style={styles.list}
      ListEmptyComponent={<EmptyList />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TaskList;

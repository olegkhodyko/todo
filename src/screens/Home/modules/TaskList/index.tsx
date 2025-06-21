import React, { FC, useCallback, useMemo } from 'react';
import { EmptyList, TaskItem } from '@screens/Home/components';
import { FlatList } from 'react-native';
import { taskFilterStore } from '@screens/Home/store';
import { Task } from '@shared/types/tasks';
import { filterTasks, sortTasks } from '@utils/array';
import {
  TASK_ITEM_HEIGHT,
  TASK_ITEM_GAP,
} from '@screens/Home/constants/dimensions';
import styles from './styles';

interface TaskListProps {
  data: Task[];
  isLoading: boolean;
  toggleDone: (id: Task['_id']) => void;
  deleteTask: (id: Task['_id']) => void;
}

const TaskList: FC<TaskListProps> = React.memo(
  ({ data, isLoading, toggleDone, deleteTask }) => {
    const filterType = taskFilterStore(state => state.filterType);
    const processedData = useMemo(() => {
      const filtered = filterTasks(data, filterType);
      return sortTasks(filtered);
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
      [isLoading, toggleDone, deleteTask],
    );

    const keyExtractor = useCallback((item: Task) => item._id, []);

    const getItemLayout = useCallback(
      (_: any, index: number) => ({
        length: TASK_ITEM_HEIGHT + TASK_ITEM_GAP,
        offset: (TASK_ITEM_HEIGHT + TASK_ITEM_GAP) * index,
        index,
      }),
      [],
    );

    return (
      <FlatList
        data={processedData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyList />}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={8}
        updateCellsBatchingPeriod={50}
        onEndReachedThreshold={0.5}
      />
    );
  },
);

TaskList.displayName = 'TaskList';

export default TaskList;

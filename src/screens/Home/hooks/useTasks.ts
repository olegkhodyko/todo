import { useCallback, useState } from 'react';
import { TaskFilter, Task } from '@shared/types/tasks';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilter>('all');

  const filteredTasks = tasks.filter(task =>
    filter === 'important' ? task.important : true,
  );

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const updateTask = (updated: Task) => {
    setTasks(prev =>
      prev.map(task => (task.id === updated.id ? updated : task)),
    );
  };

  const deleteTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const toggleDone = useCallback((id: string) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }, []);

  const setFilterType = (type: TaskFilter) => {
    setFilter(type);
  };

  return {
    tasks: filteredTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleDone,
    filter,
    setFilter: setFilterType,
  };
};

export default useTasks;

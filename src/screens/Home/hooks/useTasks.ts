import { useState, useEffect, useCallback } from 'react';
import { api } from '@api/api';
import { Task } from '@shared/types/api';
import { NewTask } from '@shared/types/tasks';
import { useTaskForm } from '@screens/Home/store/form';
import { Alert } from 'react-native';

function useTasks() {
  const [data, setData] = useState<Task[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getFormData = useTaskForm(state => state.getFormData);
  const cancelEdit = useTaskForm(state => state.cancelEdit);
  const editingTask = useTaskForm(state => state.editingTask);
  const title = useTaskForm(state => state.title);

  const fetchTasks = useCallback(async () => {
    setIsFetching(true);
    setError(null);
    try {
      const res = await api.get('/');
      setData(res.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsFetching(false);
    }
  }, []);

  const addTask = useCallback(async (task: NewTask) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await api.post('/', task);
      setData(prev => [res.data, ...prev]);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateTask = useCallback(async (task: Task) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await api.put(`/${task._id}`, task);
      setData(prev => prev.map(t => (t._id === task._id ? res.data : t)));
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteTask = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.delete(`/${id}`);
      setData(prev => prev.filter(t => t._id !== id));
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const toggleDone = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await api.patch(`/${id}/done`);
      setData(prev => prev.map(t => (t._id === id ? res.data : t)));
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveTask = () => {
    if (!title) {
      Alert.alert('Task name cannot be empty');
      return;
    }

    if (editingTask) {
      updateTask({ ...editingTask, ...getFormData() });
    } else {
      addTask(getFormData());
    }

    cancelEdit();
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    data,
    error,
    isLoading,
    isFetching,
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
    toggleDone,
    saveTask,
  };
}
export default useTasks;

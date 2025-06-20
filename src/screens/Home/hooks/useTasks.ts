import { useState, useEffect, useCallback } from 'react';
import { api } from '@api/api';
import { NewTask, Task } from '@shared/types/tasks';
import { Alert } from 'react-native';
import { taskFormStore } from '@screens/Home/store';

interface ApiError {
  message: string;
  status?: number;
}

const handleApiError = (error: any): ApiError => {
  if (error.response) {
    return {
      message: error.response.data?.message || 'Server error occurred',
      status: error.response.status,
    };
  }
  if (error.request) {
    return {
      message: 'Network error. Please check your connection.',
    };
  }
  return {
    message: error.message || 'An unexpected error occurred',
  };
};

function useTasks() {
  const [data, setData] = useState<Task[]>([]);
  const [error, setError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getFormData = taskFormStore(state => state.getFormData);
  const cancelEdit = taskFormStore(state => state.cancelEdit);
  const editingTask = taskFormStore(state => state.editingTask);
  const title = taskFormStore(state => state.title);

  const fetchTasks = useCallback(async () => {
    setIsFetching(true);
    setError(null);
    try {
      const res = await api.get('/');
      setData(res.data);
    } catch (err: any) {
      const apiError = handleApiError(err);
      setError(apiError);
      Alert.alert('Error', apiError.message);
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
      const apiError = handleApiError(err);
      setError(apiError);
      Alert.alert('Error', apiError.message);
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
      const apiError = handleApiError(err);
      setError(apiError);
      Alert.alert('Error', apiError.message);
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
      const apiError = handleApiError(err);
      setError(apiError);
      Alert.alert('Error', apiError.message);
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
      const apiError = handleApiError(err);
      setError(apiError);
      Alert.alert('Error', apiError.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveTask = useCallback(() => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      Alert.alert('Validation Error', 'Task name cannot be empty');
      return;
    }

    if (editingTask) {
      updateTask({ ...editingTask, ...getFormData() });
    } else {
      addTask(getFormData());
    }

    cancelEdit();
  }, [title, editingTask, getFormData, updateTask, addTask, cancelEdit]);

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

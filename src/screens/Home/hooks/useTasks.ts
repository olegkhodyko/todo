import { useState, useEffect, useCallback } from 'react';
import { api } from '@api/api';
import { NewTask, Task } from '@shared/types/tasks';
import { Alert } from 'react-native';
import { taskFormStore } from '@screens/Home/store';
import {
  API_ENDPOINTS,
  VALIDATION_MESSAGES,
  ERROR_MESSAGES,
} from '@shared/constants';

interface ApiError {
  message: string;
  status?: number;
}

const handleApiError = (error: any): ApiError => {
  if (error.response) {
    return {
      message: error.response.data?.message || ERROR_MESSAGES.SERVER_ERROR,
      status: error.response.status,
    };
  }
  if (error.request) {
    return {
      message: ERROR_MESSAGES.NETWORK_ERROR,
    };
  }
  return {
    message: error.message || ERROR_MESSAGES.UNEXPECTED_ERROR,
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
      const res = await api.get(API_ENDPOINTS.TASKS);
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
      const res = await api.post(API_ENDPOINTS.TASKS, task);
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
      const res = await api.put(`${API_ENDPOINTS.TASKS}${task._id}`, task);
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
      await api.delete(`${API_ENDPOINTS.TASKS}${id}`);
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
      const res = await api.patch(API_ENDPOINTS.TASK_DONE(id));
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
      Alert.alert(
        VALIDATION_MESSAGES.VALIDATION_ERROR,
        VALIDATION_MESSAGES.TASK_TITLE_REQUIRED,
      );
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

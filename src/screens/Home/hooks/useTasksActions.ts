import { Alert } from 'react-native';
import { useTaskForm } from '@screens/Home/store/form';
import { useTasks } from '@screens/Home/hooks';

const useTasksActions = () => {
  const { addTask, updateTask } = useTasks();

  const getFormData = useTaskForm(state => state.getFormData);
  const cancelEdit = useTaskForm(state => state.cancelEdit);
  const editingTask = useTaskForm(state => state.editingTask);
  const title = useTaskForm(state => state.title);

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

  return { saveTask };
};

export default useTasksActions;

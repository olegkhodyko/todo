import { Task } from '@shared/types/api';
import { NewTask, TaskFilter } from '@shared/types/tasks';
import { create } from 'zustand';

interface TaskFormState {
  title: string;
  description: string;
  important: boolean;
  editingTask: Task | null;
  filterType: TaskFilter;

  setTitle: (title: string) => void;
  setDescription: (desc: string) => void;
  toggleImportant: () => void;
  reset: () => void;
  startEdit: (task: Task) => void;
  cancelEdit: () => void;
  getFormData: () => NewTask;
  setFilterType: (type: TaskFilter) => void;
}

export const useTaskForm = create<TaskFormState>((set, get) => ({
  title: '',
  description: '',
  important: false,
  editingTask: null,
  filterType: 'all',

  setTitle: title => set({ title: title.trim() }),
  setDescription: description => set({ description: description.trim() }),
  toggleImportant: () => set(state => ({ important: !state.important })),
  reset: () =>
    set({
      title: '',
      description: '',
      important: false,
      editingTask: null,
    }),
  startEdit: (task: Task) =>
    set({
      editingTask: task,
      title: task.title,
      description: task.description,
      important: task.important,
    }),
  setFilterType: filterType => set({ filterType }),
  getFormData: () => {
    const { title, description, important } = get();
    return {
      title,
      description,
      important,
      done: false,
    };
  },
  cancelEdit: () =>
    set({
      editingTask: null,
      title: '',
      description: '',
      important: false,
    }),
}));

import { TaskFilterState, TaskFormState } from '@shared/types/store';
import { Task } from '@shared/types/tasks';
import { create } from 'zustand';

export const taskFormStore = create<TaskFormState>((set, get) => ({
  title: '',
  description: '',
  important: false,
  editingTask: null,

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

export const taskFilterStore = create<TaskFilterState>(set => ({
  filterType: 'all',
  setFilterType: filterType => set({ filterType }),
}));

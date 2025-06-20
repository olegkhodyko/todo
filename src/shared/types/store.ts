import { NewTask, Task } from '@shared/types/tasks';

export interface TaskFormState {
  title: string;
  description: string;
  important: boolean;
  editingTask: Task | null;

  setTitle: (title: string) => void;
  setDescription: (desc: string) => void;
  toggleImportant: () => void;
  reset: () => void;
  startEdit: (task: Task) => void;
  cancelEdit: () => void;
  getFormData: () => NewTask;
}

export interface TaskFilterState {
  filterType: 'all' | 'important';
  setFilterType: (type: 'all' | 'important') => void;
}


import { NewTask, Task, TaskFilter } from '@shared/types/tasks';

export interface TaskFormState {
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

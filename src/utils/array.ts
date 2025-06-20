import { Task } from '@shared/types/tasks';
import { TaskFilter } from '@shared/types/tasks';

export const filterTasks = (tasks: Task[], filterType: TaskFilter): Task[] => {
  switch (filterType) {
    case 'important':
      return tasks.filter(task => task.important);
    case 'all':
    default:
      return tasks;
  }
};

export const sortTasks = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    if (a.important && !b.important) return -1;
    if (!a.important && b.important) return 1;

    if (a.createdAt && b.createdAt) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    return 0;
  });
};

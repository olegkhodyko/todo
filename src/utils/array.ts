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

export const groupTasksByStatus = (tasks: Task[]) => {
  return {
    completed: tasks.filter(task => task.done),
    pending: tasks.filter(task => !task.done),
  };
};

export const getTaskStats = (tasks: Task[]) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.done).length;
  const important = tasks.filter(task => task.important).length;

  return {
    total,
    completed,
    pending: total - completed,
    important,
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
};

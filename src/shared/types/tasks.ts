export type Task = {
  id: string;
  title: string;
  description: string;
  important: boolean;
  done: boolean;
};

export type TaskFilter = 'all' | 'important';

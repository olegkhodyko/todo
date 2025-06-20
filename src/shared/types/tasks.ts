import { Task } from './api';
type ValueOf<T> = T extends { [key: string]: infer U } ? U : never;

export type NewTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>;

export interface FilterProps {
  id: number;
  type: TaskFilter;
  title: string;
}

const TaskFilterEnum = {
  all: 'all',
  important: 'important',
} as const;

export type TaskFilter = ValueOf<typeof TaskFilterEnum>;

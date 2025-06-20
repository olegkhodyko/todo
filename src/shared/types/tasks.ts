import { ValueOfEnum } from "@utils/types";

const TaskFilterEnum = {
  all: 'all',
  important: 'important',
} as const;
export interface Task {
  _id: string;
  title: string;
  description: string;
  important: boolean;
  done: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type NewTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>;

export interface FilterProps {
  id: number;
  type: TaskFilter;
  title: string;
}

export type TaskFilter = ValueOfEnum<typeof TaskFilterEnum>;

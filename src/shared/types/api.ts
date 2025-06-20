export interface Task {
  _id: string;
  title: string;
  description: string;
  important: boolean;
  done: boolean;
  createdAt?: string;
  updatedAt?: string;
}

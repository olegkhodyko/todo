export const API_ENDPOINTS = {
  TASKS: '/',
  TASK_DONE: (id: string) => `/${id}/done`,
} as const;

export const VALIDATION_MESSAGES = {
  TASK_TITLE_REQUIRED: 'Task name cannot be empty',
  VALIDATION_ERROR: 'Validation Error',
} as const;

export const ERROR_MESSAGES = {
  SERVER_ERROR: 'Server error occurred',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
} as const;

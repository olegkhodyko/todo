export const validateTaskTitle = (title: string): string | null => {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return 'Task name cannot be empty';
  }

  if (trimmedTitle.length > 100) {
    return 'Task name is too long (max 100 characters)';
  }

  return null;
};

export const validateTaskDescription = (description: string): string | null => {
  const trimmedDescription = description.trim();

  if (trimmedDescription.length > 500) {
    return 'Description is too long (max 500 characters)';
  }

  return null;
};

export const validateTask = (
  title: string,
  description: string,
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  const titleError = validateTaskTitle(title);
  if (titleError) errors.push(titleError);

  const descriptionError = validateTaskDescription(description);
  if (descriptionError) errors.push(descriptionError);

  return {
    isValid: errors.length === 0,
    errors,
  };
};

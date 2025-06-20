import { ButtonsRow, ImportantRow } from '@screens/Home/components';
import { Task } from '@shared/types/tasks';
import { TextInput } from '@shared/ui';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface TaskFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  important: boolean;
  toggleImportant: () => void;
  editingTask: Task | null;
  saveTask: () => void;
  cancelEdit: () => void;
}

const TaskForm: FC<TaskFormProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  important,
  toggleImportant,
  editingTask,
  saveTask,
  cancelEdit,
}) => (
  <View style={styles.form}>
    <TextInput placeholder="Task name" value={title} onChangeText={setTitle} />
    <TextInput
      style={styles.descriptionInput}
      placeholder="Description"
      value={description}
      onChangeText={setDescription}
      multiline
    />
    <ImportantRow important={important} toggleImportant={toggleImportant} />
    <ButtonsRow
      editingTask={Boolean(editingTask)}
      saveTask={saveTask}
      cancelEdit={cancelEdit}
    />
  </View>
);

const styles = StyleSheet.create({
  form: {
    marginTop: 16,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#d1d5db',
  },
  descriptionInput: {
    height: 60,
  },
});

export default TaskForm;

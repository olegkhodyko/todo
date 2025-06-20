import React, { FC } from 'react';
import { ButtonsRow, ImportantRow } from '@screens/Home/components';
import { useTaskForm } from '@screens/Home/store/form';
import { TextInput } from '@shared/ui';
import { View } from 'react-native';
import styles from './styles';
interface TaskFormProps {
  saveTask: () => void;
}

const TaskForm: FC<TaskFormProps> = ({ saveTask }) => {
  const title = useTaskForm(state => state.title);
  const description = useTaskForm(state => state.description);
  const important = useTaskForm(state => state.important);

  const setTitle = useTaskForm(state => state.setTitle);
  const setDescription = useTaskForm(state => state.setDescription);
  const toggleImportant = useTaskForm(state => state.toggleImportant);

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Task name"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.descriptionInput}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <ImportantRow important={important} toggleImportant={toggleImportant} />
      <ButtonsRow saveTask={saveTask} />
    </View>
  );
};

export default TaskForm;

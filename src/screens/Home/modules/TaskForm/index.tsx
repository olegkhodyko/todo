import React, { FC } from 'react';
import {
  ButtonsRow,
  ImportantRow,
  InputFields,
} from '@screens/Home/components';
import { View } from 'react-native';
import styles from './styles';
interface TaskFormProps {
  saveTask: () => void;
}

const TaskForm: FC<TaskFormProps> = ({ saveTask }) => (
  <View style={styles.form}>
    <InputFields />
    <ImportantRow />
    <ButtonsRow saveTask={saveTask} />
  </View>
);

export default TaskForm;

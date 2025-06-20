import React, { FC } from 'react';
import { TextInput } from '@shared/ui';
import { taskStore } from '@screens/Home/store';
import styles from './styles';

const InputFields: FC = () => {
  const title = taskStore(state => state.title);
  const description = taskStore(state => state.description);
  const setTitle = taskStore(state => state.setTitle);
  const setDescription = taskStore(state => state.setDescription);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
export default InputFields;

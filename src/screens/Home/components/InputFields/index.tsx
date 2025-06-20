import React, { FC } from 'react';
import { TextInput } from '@shared/ui';
import { taskFormStore } from '@screens/Home/store';
import styles from './styles';

const InputFields: FC = () => {
  const title = taskFormStore(state => state.title);
  const description = taskFormStore(state => state.description);
  const setTitle = taskFormStore(state => state.setTitle);
  const setDescription = taskFormStore(state => state.setDescription);

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

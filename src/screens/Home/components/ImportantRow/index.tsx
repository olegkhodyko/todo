
import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Checkbox } from '@shared/ui';

interface ImportantRowProps {
  important: boolean;
  toggleImportant: () => void;
}

const ImportantRow: FC<ImportantRowProps> = ({
  important,
  toggleImportant,
}) => (
  <View style={styles.importantRow}>
    <Checkbox important={important} toggle={toggleImportant} />
    <Text>Important task</Text>
  </View>
);

export default memo(ImportantRow);

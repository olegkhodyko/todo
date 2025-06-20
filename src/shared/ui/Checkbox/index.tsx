import React, { FC, memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface CheckboxProps {
  important: boolean;
  toggle: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ important, toggle }) => (
  <TouchableOpacity
    style={[styles.checkbox, important && styles.checkboxChecked]}
    onPress={toggle}
  >
    {important && <Text style={styles.checkmark}>✔</Text>}
  </TouchableOpacity>
);

export default memo(Checkbox);

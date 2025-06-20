import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import styles from './styles';

interface FilterButtonProps extends TouchableOpacityProps {
  active: boolean;
  title: string;
}

const FilterButton: FC<FilterButtonProps> = ({ active, title, ...rest }) => (
  <TouchableOpacity
    style={[styles.button, active && styles.buttonActive]}
    {...rest}
  >
    <Text style={[styles.buttonText, active && styles.buttonTextActive]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default FilterButton;

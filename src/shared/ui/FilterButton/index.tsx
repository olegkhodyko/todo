import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import styles from './styles';

interface FilterButtonProps extends TouchableOpacityProps {
  active: boolean;
  title: string;
}

const FilterButton: FC<FilterButtonProps> = ({ active, title, ...rest }) => (
  <TouchableOpacity
    style={[styles.filterButton, active && styles.filterButtonActive]}
    {...rest}
  >
    <Text style={styles.filterText}>{title}</Text>
  </TouchableOpacity>
);

export default FilterButton;

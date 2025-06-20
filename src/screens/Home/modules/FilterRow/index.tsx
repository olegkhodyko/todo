import React, { FC } from 'react';
import { View } from 'react-native';
import { TaskFilter } from '@shared/types/tasks';
import styles from './styles';
import { FilterButton } from '@shared/ui';

interface FilterRowProps {
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
}

interface DataProps {
  id: number;
  type: TaskFilter;
  title: string;
}

const data: DataProps[] = [
  { id: 1, type: 'all', title: 'All' },
  { id: 2, type: 'important', title: 'Important' },
];

const FilterRow: FC<FilterRowProps> = ({ filter, setFilter }) => (
  <View style={styles.filterRow}>
    {data.map(({ id, type, title }) => (
      <FilterButton
        key={id}
        active={filter === type}
        title={title}
        onPress={() => setFilter(type)}
      />
    ))}
  </View>
);
export default FilterRow;

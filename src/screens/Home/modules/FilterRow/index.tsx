import React, { FC } from 'react';
import { View } from 'react-native';
import { FilterButton } from '@shared/ui';
import { FILTER_DATA } from '@screens/Home/constants/filters';
import { useTaskForm } from '@screens/Home/store/form';
import styles from './styles';

const FilterRow: FC = () => {
  const filterType = useTaskForm(state => state.filterType);
  const setFilterType = useTaskForm(state => state.setFilterType);

  return (
    <View style={styles.filterRow}>
      {FILTER_DATA.map(({ id, type, title }) => (
        <FilterButton
          key={id}
          active={filterType === type}
          title={title}
          onPress={() => setFilterType(type)}
        />
      ))}
    </View>
  );
};
export default FilterRow;

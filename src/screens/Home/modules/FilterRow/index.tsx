import React, { FC } from 'react';
import { View } from 'react-native';
import { FilterButton } from '@shared/ui';
import { FILTER_DATA } from '@screens/Home/constants/filters';
import { taskFilterStore } from '@screens/Home/store';
import styles from './styles';

const FilterRow: FC = () => {
  const filterType = taskFilterStore(state => state.filterType);
  const setFilterType = taskFilterStore(state => state.setFilterType);

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

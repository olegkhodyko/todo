import React, { FC } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const EmptyList: FC = () => (
  <Text style={styles.text}>There are no tasks yet!</Text>
);

export default EmptyList;

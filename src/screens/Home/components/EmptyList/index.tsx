import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

const EmptyList: FC = () => (
  <Text style={styles.text}>There are no tasks yet!</Text>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default EmptyList;

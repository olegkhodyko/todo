import React, { FC } from 'react';
import { ScreenContainer } from '@shared/layout';
import { StyleSheet, Text } from 'react-native';

interface ErrorContentProps {
  error: string;
}

const ErrorContent: FC<ErrorContentProps> = ({ error }) => (
  <ScreenContainer testID="error-content" style={styles.container}>
    <Text style={{ color: 'red' }}>Error: {error}</Text>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorContent;

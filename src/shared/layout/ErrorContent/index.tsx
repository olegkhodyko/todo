import React, { FC } from 'react';
import { ScreenContainer } from '@shared/layout';
import { Text } from 'react-native';
import styles from './styles';

interface ErrorContentProps {
  error: string;
}

const ErrorContent: FC<ErrorContentProps> = ({ error }) => (
  <ScreenContainer testID="error-content" style={styles.container}>
    <Text style={styles.text}>Error: {error}</Text>
  </ScreenContainer>
);

export default ErrorContent;

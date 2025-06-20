import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ErrorContentProps {
  error: string;
  onRetry?: () => void;
}

const ErrorContent: FC<ErrorContentProps> = ({ error, onRetry }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>Error: {error}</Text>
    {onRetry && (
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Try Again</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default ErrorContent;

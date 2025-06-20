import React, { FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '@theme';

interface ScreenContainerProps {
  children: ReactNode;
  style?: any;
}

const ScreenContainer: FC<ScreenContainerProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
  content: {
    flex: 1,
  },
});

export default ScreenContainer;

import { StatusBar, StyleSheet, View } from 'react-native';
import RootStack from '@navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <RootStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import Screens from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navigation';
import { ScreenOptions } from '../config/navigation';

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        options={ScreenOptions.Home}
      />
    </Stack.Navigator>
  );
}

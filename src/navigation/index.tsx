import React from 'react';
import Screens from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenOptions } from '@config/navigation';
import { RootStackParamList } from '@shared/types/navigation';

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

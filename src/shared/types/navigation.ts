import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type TypedRoute<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
export type TypedNavigation<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type AppNavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Home: undefined;
};

export type RootNavigationScreenOptions = Record<
  keyof RootStackParamList,
  NativeStackNavigationOptions
>;

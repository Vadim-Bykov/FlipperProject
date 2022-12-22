import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {AuthStackParams} from './screens/AuthStack/AuthStackNavigationType';
import {MainStackParams} from './screens/MainStack/MainStackNavigationType';

export type AppStackParams = {
  MainStack: NavigatorScreenParams<MainStackParams>;
  AuthStack: NavigatorScreenParams<AuthStackParams>;
};

export type AppStackProps<T extends keyof AppStackParams> = StackScreenProps<
  AppStackParams,
  T
>;

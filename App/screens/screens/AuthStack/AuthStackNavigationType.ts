import {AppStackProps, AppStackParams} from './../../AppNavigationType';
import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps} from '@react-navigation/native';

export type AuthStackParams = {
  LoginScreen: undefined;
  RegistrationScreen: undefined;
};

export type AuthStackProps<T extends keyof AuthStackParams> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParams, T>,
    AppStackProps<keyof AppStackParams>
  >;

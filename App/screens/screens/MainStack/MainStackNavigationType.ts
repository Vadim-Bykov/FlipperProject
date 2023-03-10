import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParams, AppStackProps} from '../../AppNavigationType';

export type MainStackParams = {
  HomeScreen: undefined;
  MoreScreen: undefined;
  TodosScreen: undefined;
  PostsScreen: undefined;
  TodoDetailsScreen: {id: number};
};

export type MainStackProps<T extends keyof MainStackParams> =
  CompositeScreenProps<
    StackScreenProps<MainStackParams, T>,
    AppStackProps<keyof AppStackParams>
  >;

import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainStackProps} from '../MainStackNavigationType';
import {useTodoDetails} from '../../../../api/jsonplaceholder';

export const TodoDetailsScreen: React.FC<
  MainStackProps<'TodoDetailsScreen'>
> = ({navigation: {navigate}, route}) => {
  const {data: post} = useTodoDetails({
    postNumber: route.params.id,
    queryOptions: {onSuccess: () => console.log('onSuccess')},
  });

  if (!post) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Post: {post.id}</Text>
      <Text>Title: {post.title}</Text>
      <Text>Completed: {post.completed}</Text>
      <Text>UserId: {post.userId}</Text>
      <Button title="Go to HomeScreen" onPress={() => navigate('HomeScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

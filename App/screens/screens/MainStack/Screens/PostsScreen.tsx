import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {usePosts} from '../../../../api/jsonplaceholder';

export const PostsScreen = () => {
  const {data: todos} = usePosts();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todos?.map(({id, title}) => (
        <TouchableOpacity
          key={id}
          style={styles.todo}
          onPress={() => console.log({id})}>
          <Text>Todo: {id}</Text>
          <Text>{title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },

  todo: {
    marginBottom: 10,
  },
});

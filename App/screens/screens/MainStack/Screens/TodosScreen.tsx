import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTodos} from '../../../../api/jsonplaceholder';
import {MainStackProps} from '../MainStackNavigationType';

export const TodosScreen: React.FC<MainStackProps<'TodosScreen'>> = ({
  navigation: {navigate},
}) => {
  const {data: todos} = useTodos();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todos?.map(({id, title}) => (
        <TouchableOpacity
          key={id}
          style={styles.todo}
          onPress={() => navigate('TodoDetailsScreen', {id})}>
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

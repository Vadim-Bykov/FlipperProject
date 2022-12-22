import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainStackProps} from '../MainStackNavigationType';
import {useAppDispatch} from '../../../../store';
import {updateAuthData} from '../../../../store/auth/actions';
import {usePost, usePosts, useTodos} from '../../../../api/jsonplaceholder';

export const MoreScreen: React.FC<MainStackProps<'MoreScreen'>> = ({
  navigation: {navigate},
}) => {
  const dispatch = useAppDispatch();
  const {data: posts} = usePosts();
  const {data: post} = usePost({
    postNumber: 1,
    queryOptions: {onSuccess: () => console.log('Ok')},
  });
  const {data: todos} = useTodos();
  console.log({post});

  return (
    <View style={styles.container}>
      <Text>MoreScreen</Text>
      <Button title="Go to HomeScreen" onPress={() => navigate('HomeScreen')} />
      <Button
        title="Logout"
        onPress={() => dispatch(updateAuthData({isLoggedIn: false}))}
      />
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

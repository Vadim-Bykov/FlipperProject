import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainStackProps} from '../MainStackNavigationType';
import {useAppDispatch} from '../../../../store';
import {updateAuthData} from '../../../../store/auth/actions';

export const MoreScreen: React.FC<MainStackProps<'MoreScreen'>> = ({
  navigation: {navigate},
}) => {
  const dispatch = useAppDispatch();

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

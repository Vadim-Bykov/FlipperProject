import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthStackProps} from '../AuthStackNavigationType';
import {useAppDispatch} from '../../../../store';
import {updateAuthData} from '../../../../store/auth/actions';

export const LoginScreen: React.FC<AuthStackProps<'LoginScreen'>> = ({
  navigation: {navigate},
}) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Go to registration"
        onPress={() => navigate('RegistrationScreen')}
      />
      <Button
        title="Login"
        onPress={() => dispatch(updateAuthData({isLoggedIn: true}))}
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

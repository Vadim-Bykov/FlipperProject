import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthStackProps} from '../AuthStackNavigationType';

export const LoginScreen: React.FC<AuthStackProps<'LoginScreen'>> = ({
  navigation: {navigate},
}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Go to registration"
        onPress={() => navigate('RegistrationScreen')}
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

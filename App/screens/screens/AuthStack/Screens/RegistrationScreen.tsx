import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RegistrationScreen</Text>
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

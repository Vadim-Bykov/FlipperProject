import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainStackProps} from '../MainStackNavigationType';

export const MoreScreen: React.FC<MainStackProps<'MoreScreen'>> = ({
  navigation: {navigate},
}) => {
  return (
    <View style={styles.container}>
      <Text>MoreScreen</Text>
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

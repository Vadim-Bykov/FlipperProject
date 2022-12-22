import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainStackProps} from '../MainStackNavigationType';

export const HomeScreen: React.FC<MainStackProps<'HomeScreen'>> = ({
  navigation: {navigate},
}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Go to MoreScreen" onPress={() => navigate('MoreScreen')} />
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

import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainStackProps} from '../MainStackNavigationType';
import NativeCalendarModule from '../../../../modules/NativeCalendarModule';

export const HomeScreen: React.FC<MainStackProps<'HomeScreen'>> = ({
  navigation: {navigate},
}) => {
  const createCalendarEvent = () => {
    NativeCalendarModule.createCalendarEvent('Cool party', 'Mogilev');
    NativeCalendarModule.createCalendarEventCallback(
      'Cool party',
      'Mogilev',
      (error, eventId) => {
        if (error) {
          console.error(`Error found! ${error}`);
        }
        console.log(`Callback with an event id ${eventId} returned`);
      },
    );
    console.log({
      DEFAULT_EVENT_NAME: NativeCalendarModule.getConstants(),
    });
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Go to MoreScreen" onPress={() => navigate('MoreScreen')} />
      <Button
        title="Go to TodosScreen"
        onPress={() => navigate('TodosScreen')}
      />
      <Button
        title="Go to PostsScreen"
        onPress={() => navigate('PostsScreen')}
      />

      <Button title="Calendar event" onPress={createCalendarEvent} />
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

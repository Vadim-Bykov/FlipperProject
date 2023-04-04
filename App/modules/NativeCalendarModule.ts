import {NativeModules} from 'react-native';

const {CalendarModule} = NativeModules;

interface CalendarInterface {
  createCalendarEvent: (name: string, location: string) => void;
  getConstants: () => {DEFAULT_EVENT_NAME: string};
  createCalendarEventCallback: (
    name: string,
    location: string,
    callback: (error: any, eventId: number) => void,
  ) => void;
}

export default CalendarModule as CalendarInterface;

package com.flipperproject;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
   public String getName() {
   return "CalendarModule";
}

   @ReactMethod
   public void createCalendarEvent(String name, String location) {
      Log.d("CalendarModule", "Create event called with name: " + name
      + " and location: " + location);
   }

   @ReactMethod
   public void createCalendarEventCallback(String name, String location, Callback callback) {
       Integer eventId = 123;
       callback.invoke(null, eventId);
   }

}


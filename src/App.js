import React from 'react';
import {LogBox, Platform, StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigations';
import {colors} from './utils';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreAllLogs();

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <View
          style={{height: STATUS_BAR_HEIGHT, backgroundColor: colors.primary}}>
          <StatusBar
            translucent
            backgroundColor={colors.primary}
            barStyle="light-content"
          />
        </View>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;

import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
import { selectCurrentScreen } from './redux/uiSlice';

import ScreensMenu from './components/ScreensMenu';
import ConnectScreen from './screens/ConnectScreen';
import ProfilesScreen from './screens/ProfilesScreen';
import SettingsScreen from './screens/SettingsScreen';
import InfoScreen from './screens/InfoScreen';

export default function App() {
  const currentScreen = useSelector(selectCurrentScreen);

  let renderedScreen = null;
  switch (currentScreen) {
    case 'ConnectScreen':
      renderedScreen = <ConnectScreen />;
      break;
    case 'ProfilesScreen':
      renderedScreen = <ProfilesScreen />;
      break;
    case 'SettingsScreen':
      renderedScreen = <SettingsScreen />;
      break;
    case 'InfoScreen':
      renderedScreen = <InfoScreen />;
      break;
    default:
      renderedScreen = <ConnectScreen />;
      break;
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, flexDirection: 'row', backgroundColor: '#121212' }}>
      <StatusBar hidden />
      <ScreensMenu />
      {renderedScreen}
    </GestureHandlerRootView>
  );
}

import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectScreensMenuOpen,
  selectCurrentScreen,
  setCurrentScreen,
} from '../redux/uiSlice';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  darkThemeProps,
  overlayProps,
  textProps,
} from '../styles/GlobalStyles';

export default function ScreensMenu() {
  const dispatch = useDispatch();
  const screensMenuOpen = useSelector(selectScreensMenuOpen);
  const currentScreen = useSelector(selectCurrentScreen);

  return (
    screensMenuOpen && (
      <View style={styles.container123}>
        <Pressable
          onPress={() =>
            dispatch(setCurrentScreen({ screen: 'ConnectScreen' }))
          }>
          <Ionicons
            name="link-outline"
            style={
              currentScreen == 'ConnectScreen'
                ? styles.icon_selected
                : styles.icon_unselected
            }
          />
        </Pressable>
        <Pressable
          onPress={() =>
            dispatch(setCurrentScreen({ screen: 'ProfilesScreen' }))
          }>
          <Ionicons
            name="game-controller-outline"
            style={
              currentScreen == 'ProfilesScreen'
                ? styles.icon_selected
                : styles.icon_unselected
            }
          />
        </Pressable>
        <Pressable
          onPress={() =>
            dispatch(setCurrentScreen({ screen: 'SettingsScreen' }))
          }>
          <Ionicons
            name="settings-outline"
            style={
              currentScreen == 'SettingsScreen'
                ? styles.icon_selected
                : styles.icon_unselected
            }
          />
        </Pressable>
        <Pressable
          onPress={() => dispatch(setCurrentScreen({ screen: 'InfoScreen' }))}>
          <Ionicons
            name="information-circle-outline"
            style={
              currentScreen == 'InfoScreen'
                ? styles.icon_selected
                : styles.icon_unselected
            }
          />
        </Pressable>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container123: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: overlayProps.dp8.backgroundColor,
    paddingHorizontal: 15,
  },
  icon_selected: {
    backgroundColor: darkThemeProps.primary,
    fontSize: 30,
    color: textProps.emphasis.high,
    padding: 10,
    borderRadius: 10,
  },
  icon_unselected: {
    fontSize: 30,
    color: textProps.emphasis.high,
    padding: 10,
    borderRadius: 10,
  },
});

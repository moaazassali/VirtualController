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
      <View style={styles.container}>
        <Pressable
          onPress={() =>
            dispatch(setCurrentScreen({ screen: 'ConnectScreen' }))
          }
          style={
            currentScreen == 'ConnectScreen'
              ? styles.icon_selected
              : styles.icon_unselected
          }>
          <Ionicons name="link-outline" style={styles.icon} />
        </Pressable>
        <Pressable
          onPress={() =>
            dispatch(setCurrentScreen({ screen: 'ProfilesScreen' }))
          }
          style={
            currentScreen == 'ProfilesScreen'
              ? styles.icon_selected
              : styles.icon_unselected
          }>
          <Ionicons name="game-controller-outline" style={styles.icon} />
        </Pressable>
        <Pressable
          onPress={() =>
            dispatch(setCurrentScreen({ screen: 'SettingsScreen' }))
          }
          style={
            currentScreen == 'SettingsScreen'
              ? styles.icon_selected
              : styles.icon_unselected
          }>
          <Ionicons name="settings-outline" style={styles.icon} />
        </Pressable>
        <Pressable
          onPress={() => dispatch(setCurrentScreen({ screen: 'InfoScreen' }))}
          style={
            currentScreen == 'InfoScreen'
              ? styles.icon_selected
              : styles.icon_unselected
          }>
          <Ionicons name="information-circle-outline" style={styles.icon} />
        </Pressable>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: overlayProps.dp8.backgroundColor,
    paddingHorizontal: 15,
  },
  icon_button: {
    backgroundColor: 'red',
  },
  icon_selected: {
    backgroundColor: darkThemeProps.primary,
    padding: 10,
    borderRadius: 10,
  },
  icon_unselected: {
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    fontSize: 30,
    color: textProps.emphasis.high,
  },
});

import { StyleSheet } from 'react-native';

import {
  darkThemeProps,
  overlayProps,
  textProps,
} from '../../styles/GlobalStyles';

export const placeholderColor = textProps.emphasis.medium;
export const spacerColor = darkThemeProps.primary;

export default StyleSheet.create({
  // ServerAddressInput.js
  address_container: {
    backgroundColor: overlayProps.dp1.backgroundColor,
    padding: 20,
    borderRadius: 5,
  },
  address_container_title: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.xl,
    fontWeight: textProps.weight.bold,
  },
  addressParts_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  addressParts_input: {
    flex: 1,
    backgroundColor: overlayProps.dp6.backgroundColor,
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: textProps.size.l,
    textAlign: 'center',
  },
  addressParts_separator: {
    fontSize: textProps.size.xl,
    color: textProps.emphasis.high,
    fontWeight: textProps.weight.bold,
    paddingHorizontal: 5,
  },

  // ProfileList.js
  profileList_container: {
    flex: 2,
    backgroundColor: overlayProps.dp1.backgroundColor,
    padding: 20,
    borderRadius: 5,
  },
  profileList_container_title: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.xl,
    fontWeight: textProps.weight.bold,
  },
  noProfiles_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.m,
  },
  profiles_flatlist: {
    paddingRight: 10,
  },

  // ProfileListItem.js
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  item_profile_button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  item_profile_button_text: {
    flex: 1,
    color: textProps.emphasis.high,
    fontSize: textProps.size.m,
  },
  checkIcon: {
    fontSize: 22,
    color: darkThemeProps.error,
  },

  // ConnectButton.js
  connect_button: {
    flex: 1,
    backgroundColor: darkThemeProps.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connect_button_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.xl,
    fontWeight: textProps.weight.bold,
  },

  // FunctionalControllerItem.js
  controller_button: {
    position: 'absolute',
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: darkThemeProps.primary,
    aspectRatio: 1,
    alignItems: 'center',
    zIndex: 1,
  },
  controller_button_innerview: {
    alignItems: 'center',
    aspectRatio: 1,
  },
  controller_button_text: {
    fontSize: textProps.size.xl,
    color: textProps.emphasis.high,
    fontWeight: 'bold',
  },
  controller_stick_container: {
    position: 'absolute',
    left: 100,
    top: 100,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: darkThemeProps.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  controller_stick_draggable: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: darkThemeProps.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controller_stick_text: {
    fontSize: textProps.size.xl,
    color: textProps.emphasis.high,
  },
});

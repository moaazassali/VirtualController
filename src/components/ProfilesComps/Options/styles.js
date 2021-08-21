import { StyleSheet } from 'react-native';

import {
  darkThemeProps,
  textProps,
  overlayProps,
} from '../../../styles/GlobalStyles';

export const placeholderColor = textProps.emphasis.medium;
export const spacerColor = darkThemeProps.primary;
export const deleteIconColor = textProps.emphasis.high;

export default StyleSheet.create({
  card: {
    backgroundColor: overlayProps.dp1.backgroundColor,
    padding: 20,
    borderRadius: 5,
  },
  card_title: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.xl,
    fontWeight: textProps.weight.bold,
  },

  // CreateProfileForm.js
  profileName_input: {
    backgroundColor: overlayProps.dp6.backgroundColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: textProps.size.m,
  },
  createProfile_button: {
    backgroundColor: darkThemeProps.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createProfile_button_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.l,
    fontWeight: textProps.weight.bold,
  },

  // ProfileList.js
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
    padding: 10,
    borderRadius: 5,
  },
  item_profile_button_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.m,
  },
  item_delete_button: {
    padding: 10,
    borderRadius: 5,
  },

  // DeleteProfileModal.js
  modal_overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modal_card: {
    backgroundColor: darkThemeProps.background,
    width: '50%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: darkThemeProps.error,
  },
  modal_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textProps.emphasis.high,
    textAlign: 'center',
  },
  modal_button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: textProps.emphasis.high,
  },
  modal_button_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.m,
  },
});

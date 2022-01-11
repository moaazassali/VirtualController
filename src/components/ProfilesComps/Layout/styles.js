import { StyleSheet } from 'react-native';

import {
  darkThemeProps,
  textProps,
  overlayProps,
} from '../../../styles/GlobalStyles';

export const optionsIconColor = textProps.emphasis.high;

export default StyleSheet.create({
  // EditingOptions.js
  options_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 20,
  },
  options_button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkThemeProps.error,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  options_button_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.s,
    fontWeight: textProps.weight.bold,
  },
  toggleOptions_button_container: {
    ...StyleSheet.absoluteFillObject,
    top: 10,
    alignItems: 'center',
    zIndex: 2,
  },
  toggleOptions_button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkThemeProps.error,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 16,
  },

  // ControllerItemList.js
  list_container: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    height: '100%',
  },
  list: {
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 15,
  },

  // ControllerItem.js
  controller_button: {
    borderWidth: 2,
    borderColor: darkThemeProps.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  controller_button_text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  controller_stick_outer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: darkThemeProps.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controller_stick_inner: {
    borderRadius: 50,
    padding: 5,
    aspectRatio: 1,
    backgroundColor: darkThemeProps.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controller_stick_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  layout_stick_outer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: darkThemeProps.primary,
  },
  layout_stick_inner: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: darkThemeProps.error,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ControllerItemOptions.js
  itemOptions_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    // width: '165%',
    // height: '165%',
    flexDirection: 'column',
    zIndex: 2,
  },
  itemOptions_top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemOptions_bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  itemOptions_delete: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkThemeProps.error,
    padding: 5,
    borderRadius: 5,
    aspectRatio: 1,
    marginTop: 5,
  },
  itemOptions_expand: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkThemeProps.error,
    padding: 5,
    borderRadius: 5,
    aspectRatio: 1,
  },
  itemOptions_settings: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkThemeProps.error,
    padding: 5,
    borderRadius: 5,
    aspectRatio: 1,
    marginRight: 5,
  },
  modal_overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modal_card: {
    backgroundColor: darkThemeProps.background,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: darkThemeProps.error,
  },
  scale_text: {
    color: textProps.emphasis.high,
    fontSize: textProps.size.l,
  },
  scale_textinput: {
    textAlign: 'center',
    backgroundColor: overlayProps.dp6.backgroundColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: textProps.size.m,
    color: textProps.emphasis.high,
    alignSelf: 'stretch',
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

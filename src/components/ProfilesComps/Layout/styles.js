import { StyleSheet } from 'react-native';

import { darkThemeProps, textProps } from '../../../styles/GlobalStyles';

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
    padding: 10,
    borderWidth: 2,
    borderColor: darkThemeProps.primary,
    aspectRatio: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  controller_button_text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },

  // ControllerItemOptions.js
  itemOptions_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '165%',
    height: '165%',
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
});

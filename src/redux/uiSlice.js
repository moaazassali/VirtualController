import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screensMenuOpen: true,
  currentScreen: 'ConnectScreen',
};

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showScreensMenu: state => {
      state.screensMenuOpen = true;
    },
    hideScreensMenu: state => {
      state.screensMenuOpen = false;
    },
    setCurrentScreen: (state, action) => {
      const { screen } = action.payload;
      state.currentScreen = screen;
    },
  },
});

export const selectScreensMenuOpen = state => state.ui.screensMenuOpen;
export const selectCurrentScreen = state => state.ui.currentScreen;

export const { showScreensMenu, hideScreensMenu, setCurrentScreen } =
  slice.actions;

export default slice.reducer;

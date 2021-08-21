import { configureStore } from '@reduxjs/toolkit';

import profilesSlice from './profilesSlice';
import uiSlice from './uiSlice';

export default configureStore({
  reducer: {
    profiles: profilesSlice,
    ui: uiSlice,
  },
});

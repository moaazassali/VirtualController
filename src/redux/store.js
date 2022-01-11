import { configureStore } from '@reduxjs/toolkit';

import profilesSlice from './profilesSlice';
import uiSlice from './uiSlice';
import networkingSlice from './networkingSlice';

export default configureStore({
  reducer: {
    profiles: profilesSlice,
    ui: uiSlice,
    networking: networkingSlice,
  },
});

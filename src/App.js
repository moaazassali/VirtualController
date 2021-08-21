import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchProfiles } from './redux/profilesSlice';

import AppContainer from './AppContainer';

store.dispatch(fetchProfiles());

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

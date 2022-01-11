import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '192.168.70.129',
  port: 30123,
};

const slice = createSlice({
  name: 'networking',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      const { address } = action.payload;
      state.address = address;
    },
    setPort: (state, action) => {
      const { port } = action.payload;
      state.port = port;
    },
  },
});

export const selectAddress = state => state.networking.address;
export const selectPort = state => state.networking.port;

export const { setAddress, setPort } = slice.actions;

export default slice.reducer;

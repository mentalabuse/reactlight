import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

export const lightSlice = createSlice({
  name: 'light',
  initialState,
  reducers: {
    switchStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const { switchStatus } = lightSlice.actions;

export default lightSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import lightReducer from './reducers/lightSlice';

export const store = configureStore({
  reducer: {
    light: lightReducer,
  },
});

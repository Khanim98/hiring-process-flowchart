import { configureStore } from '@reduxjs/toolkit';
import flowchartSlice from '../features/flowchartSlice';

export const store = configureStore({
  reducer: {
    flowchartData: flowchartSlice,
  },
})
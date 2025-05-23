import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/itemsSlice';
import costsReducer from './features/costsSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    costs: costsReducer,
  },
});
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Slices/themeSlice'; // ✅ your existing reducer

// ✅ Configure the store
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// ✅ Export types for usage in selectors & dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

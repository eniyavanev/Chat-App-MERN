import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: boolean; // true for dark, false for light
}

const initialState: ThemeState = {
  theme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

/**
 * store/theme/theme.slice.ts
 * ----------------------
 * Redux slice for managing application theme (light/dark mode).
 *
 * Purpose:
 * - Centralizes theme state management across the app.
 * - Provides actions for toggling between light and dark modes.
 * - Persists clean defaults (light mode by default).
 *
 * State Shape:
 * ```ts
 * interface ThemeState {
 *   mode: 'dark' | 'light';
 * }
 * ```
 *
 * Actions:
 * - `toggleTheme` → Switches between light and dark modes.
 * - `resetTheme` → Resets theme back to default (`light`).
 *
 *
 * Author: Victor U.
 * Created: Sept 2025
 */
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'dark' | 'light';
}

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * Toggle between light and dark theme
     *
     * @param state - Current theme state (dark|light)
     */
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    /**
     * Reset theme state to default.
     */
    resetTheme(state) {
      state.mode = 'light';
    },
  },
});

export const { resetTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

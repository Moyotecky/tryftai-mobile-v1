/**
 * hooks/store/useThemeStore.ts
 * ----------------------
 * Custom hook for accessing and updating theme state.
 *
 * Wraps `useAppSelector` and `useAppDispatch` for
 * cleaner usage in components.
 *
 * Author: Victor U.
 * Created: Sept 2025
 */

import { resetTheme, toggleTheme } from '@tryftai/store/theme/theme.slice';
import { useAppDispatch, useAppSelector } from './store';

/**
 * Custom hook to interact with theme state.
 *
 * Example:
 * ```ts
 * const { mode, toggleTheme, reset } = useThemeStore();
 * ```
 */
export const useThemeStore = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return {
    mode,
    toggleTheme: () => dispatch(toggleTheme()),
    reset: () => dispatch(resetTheme()),
  };
};

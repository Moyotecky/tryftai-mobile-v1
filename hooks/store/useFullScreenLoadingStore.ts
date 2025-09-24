/**
 * hooks/store/useFullScreenLoadingStore.ts
 * ----------------------
 * Custom hook for accessing and updating full screen loading state.
 *
 * Wraps `useAppSelector` and `useAppDispatch` for
 * cleaner usage in components.
 *
 * Author: Victor U.
 * Created: Sept 2025
 */

import {
  startLoading,
  stopLoading,
} from '@tryftai/store/full-screen-loading/fullscreenloading.slice';
import { useAppDispatch, useAppSelector } from './store';

/**
 * Custom hook to interact with full screen loading state.
 *
 * Example:
 * ```ts
 * const { isLoading, startLoading, stopLoading } = useFullScreenLoadingStore();
 * ```
 */
export const useFullScreenLoadingStore = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  return {
    isLoading,
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
  };
};

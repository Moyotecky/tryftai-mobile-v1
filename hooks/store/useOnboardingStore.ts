/**
 * useOnboarding.ts
 * ----------------------
 * Custom hook for accessing and updating onboarding state.
 *
 * Wraps `useAppSelector` and `useAppDispatch` for
 * cleaner usage in components.
 *
 * Author: Victor U.
 * Created: Sept 2025
 */

import { resetOnboarding, setViewedOnboarding } from '@tryftai/store/onboarding/onboarding.slice';
import { useAppDispatch, useAppSelector } from './store';

/**
 * Custom hook to interact with onboarding state.
 *
 * Example:
 * ```ts
 * const { viewedOnboarding, completeOnboarding } = useOnboarding();
 * ```
 */
export function useOnboarding() {
  const dispatch = useAppDispatch();
  const viewedOnboarding = useAppSelector((state) => state.onboarding.viewedOnboarding);

  return {
    viewedOnboarding,
    completeOnboarding: () => dispatch(setViewedOnboarding()),
    reset: () => dispatch(resetOnboarding()),
  };
}

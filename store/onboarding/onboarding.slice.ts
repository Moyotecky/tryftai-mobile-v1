/**
 * store/onboarding/onboarding.slice.ts
 * ----------------------
 * Redux slice for managing onboarding flow state.
 *
 * Purpose:
 * - Tracks whether the user has completed/viewed onboarding.
 * - Helps control navigation flow:
 *   - If `viewedOnboarding = false` → show onboarding screens.
 *   - If `viewedOnboarding = true`  → skip directly to authentication or main app.
 *
 * State Shape:
 * ```ts
 * interface OnboardingState {
 *   viewedOnboarding: boolean; // true if onboarding has been completed
 * }
 * ```
 *
 * Actions:
 * - `setViewedOnboarding` → Marks onboarding as completed.
 * - `resetOnboarding` → Resets onboarding status (useful for debugging or logout).
 *
 *
 * Author: Victor U.
 * Created: Sept 2025
 */
import { createSlice } from '@reduxjs/toolkit';

interface OnboardingState {
  viewedOnboarding: boolean;
}

const initialState: OnboardingState = {
  viewedOnboarding: false,
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    /**
     * Mark onboarding as viewed.
     *
     * @param state - Current onboarding state
     */
    setViewedOnboarding(state) {
      state.viewedOnboarding = true;
    },

    /**
     * Reset onboarding status (useful for debugging or logout).
     */
    resetOnboarding(state) {
      state.viewedOnboarding = false;
    },
  },
});

export const { resetOnboarding, setViewedOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;

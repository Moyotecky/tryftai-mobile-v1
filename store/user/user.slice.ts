/**
 * store/user/user.slice.ts
 * ----------------------
 * Redux slice for managing currently logged-in user information.
 *
 * Purpose:
 * - Stores user data in Redux state after authentication.
 * - Provides actions to update or clear user data.
 *
 * State Shape:
 * - `Partial<User>` → User properties may or may not be set.
 *
 * Actions:
 * - `updateUser` → Updates user state with provided payload (merges with existing).
 * - `logoutUser` → Clears all user state (resets to empty object).
 *
 * Notes:
 * - Designed to work with User type defined in @tryftai/api/contracts/user/user.contract.
 *
 * Author: Victor U.
 * Created: Sept 2025
 */

import { createSlice } from '@reduxjs/toolkit';
import { User } from '@tryftai/api/contracts/user/user.contract';

const initialState: Partial<{
  user: Partial<User>;
  accessToken: string;
}> = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Update user state
     *
     * @param state - Current user state
     */
    updateUser(state, { payload }: { payload: Partial<User> }) {
      return {
        ...state,
        user: payload,
      };
    },

    /**
     * Logout user
     *
     * @param state - Current user state
     */
    logoutUser(state) {
      state = {};
    },

    /**
     * Update Access Token
     *
     * @param state - Update User Access Token
     */
    updateAccessToken(state, { payload }: { payload: string }) {
      return {
        ...state,
        accessToken: payload,
      };
    },
  },
});

export const { logoutUser, updateUser, updateAccessToken } = userSlice.actions;

export default userSlice.reducer;

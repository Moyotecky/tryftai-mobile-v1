/**
 * hooks/store/useAuthUserStore.ts
 * ----------------------
 * Custom hook for accessing and updating authenticated user state.
 *
 * Wraps `useAppSelector` and `useAppDispatch` for
 * cleaner usage in components.
 *
 * Provides:
 * - `currentUser` → The currently logged-in user (from Redux store).
 * - `updateUser` → Update the user state with partial user data.
 * - `logoutUser` → Clear the user state (log out).
 *
 * Author: Victor U.
 * Created: Sept 2025
 */

import { User } from '@tryftai/api/contracts/user/user.contract';
import { logoutUser, updateAccessToken, updateUser } from '@tryftai/store/user/user.slice';
import { useAppDispatch, useAppSelector } from './store';

/**
 * Custom hook to interact with user authentication state.
 *
 * Example:
 * ```ts
 * const { currentUser, updateUser, logoutUser } = useAuthUserStore();
 *
 * updateUser({ name: "Alice" });
 * logoutUser();
 * ```
 */
export const useAuthUserStore = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user);

  return {
    currentUser: currentUser?.user,
    accessToken: currentUser.accessToken,
    isLoggedIn: !!currentUser.accessToken,
    logoutUser: () => dispatch(logoutUser()),
    updateUser: (user: Partial<User>) => dispatch(updateUser(user)),
    updateAccessToken: (token: string) => dispatch(updateAccessToken(token)),
  };
};

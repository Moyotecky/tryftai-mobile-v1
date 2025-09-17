/**
 * store.ts
 * ----------------------
 * Redux store configuration for the application with persistent enabled.
 *
 * This file sets up the central Redux store using Redux Toolkit's
 * `configureStore`. It imports and registers slice reducers,
 * and also defines TypeScript helper types for root state
 * and dispatch, which improves type safety across the app.
 *
 * Uses redux-persist + AsyncStorage to save state across app restarts.
 *
 * Example:
 * - `RootState` is used to type `useSelector`
 * - `AppDispatch` is used to type `useDispatch`
 *
 * Author: Victor U.
 * Created: Sept 2025
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import onboardingReducer from './onboarding/onboarding.slice';
import themeReducer from './theme/theme.slice';

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
  theme: themeReducer,
  // Add other slice reducers here
});

const persistConfig = {
  key: 'root', // Unique key for the persisted state
  storage: AsyncStorage, // Storage mechanism (AsyncStorage)
  // Whitelist which reducers to persist
  whitelist: ['onboarding', 'theme'],
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

/**
 * Type alias for the full Redux state tree.
 *
 * Useful when typing selectors:
 * ```ts
 * const data = useSelector((state: RootState) => state.[reducer].value);
 * ```
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type alias for the store's dispatch function.
 *
 * Useful when typing custom hooks like:
 * ```ts
 * const dispatch = useAppDispatch();
 * dispatch(increment());
 * ```
 */
export type AppDispatch = typeof store.dispatch;

/**
 * hooks/store.ts
 * ----------------------
 * Custom typed hooks for Redux state management.
 *
 * These hooks wrap the default `useDispatch` and `useSelector`
 * from `react-redux`, ensuring they automatically infer types
 * based on our store configuration.
 *
 * Benefits:
 * - No need to manually type `dispatch` or `state` in components
 * - Reduces boilerplate when accessing Redux
 *
 * Author: Victor U.
 * Created: Sept 2025
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';

/**
 * Custom dispatch hook with proper TypeScript inference.
 *
 * Example:
 * ```ts
 * const dispatch = useAppDispatch();
 * dispatch(increment()); // Auto-completes and type checks
 * ```
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Custom selector hook with proper TypeScript inference.
 *
 * Example:
 * ```ts
 * const count = useAppSelector((state) => state.counter.value); // types auto inferred
 * ```
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Providers.tsx
 * ----------------------
 * A centralized wrapper for global app providers.
 *
 * This component is meant to be used at the root of your application
 * to ensure that all child components have access to:
 *
 * - **GestureHandlerRootView** → Required for `react-native-gesture-handler` to work properly.
 * - **BottomSheetModalProvider** → Required for `@gorhom/bottom-sheet` to work properly.
 * - **Redux Provider** → Supplies the Redux store to the entire app.
 * - **PersistGate** → Delays rendering until persisted state (via redux-persist) has been rehydrated.
 *
 * Props:
 * @props IProviderProps
 *
 *
 * Notes:
 * - `PersistGate` shows a loading spinner (`ActivityIndicator`) while waiting
 *   for AsyncStorage state to rehydrate.
 * - Wrapping with `GestureHandlerRootView` ensures proper gesture handling
 *   (e.g. swipes, drag-and-drop, bottom sheets).
 *
 *
 * Author: Victor U.
 * Created: Sept 2025
 */
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { persistor, store } from '@tryftai/store/store';
import { ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { FullScreenLoader } from '../molecules/full-screen-loader';
import { type IProviderProps } from './provider.types';

export const Providers: React.FC<IProviderProps> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className="flex-1">
        <BottomSheetModalProvider>
          <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <FullScreenLoader />
              {children}
            </PersistGate>
          </Provider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

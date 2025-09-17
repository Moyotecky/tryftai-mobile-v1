import '../global.css';

import { Providers } from '@tryftai/components/providers';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(check-update)/index',
};

export default function RootLayout() {
  const isLoggedIn = false;
  const [loaded] = useFonts({
    Gilroy_Black: require('../assets/fonts/Gilroy-Black.ttf'),
    Gilroy_BlackItalic: require('../assets/fonts/Gilroy-BlackItalic.ttf'),
    Gilroy_Bold: require('../assets/fonts/Gilroy-Bold.ttf'),
    Gilroy_Bold_Italic: require('../assets/fonts/Gilroy-BoldItalic.ttf'),
    Gilroy_Heavy: require('../assets/fonts/Gilroy-ExtraBold.ttf'),
    Gilroy_Regular: require('../assets/fonts/Gilroy-Regular.ttf'),
    Gilroy_Medium: require('../assets/fonts/Gilroy-Medium.ttf'),
    Gilroy_Thin: require('../assets/fonts/Gilroy-Thin.ttf'),
    Gilroy_SemiBold: require('../assets/fonts/Gilroy-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(check-update)" />
        <Stack.Screen name="onboarding" />
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="main" />
        </Stack.Protected>

        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="authentication" />
        </Stack.Protected>
      </Stack>
    </Providers>
  );
}

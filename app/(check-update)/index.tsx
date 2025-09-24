/**
 * app/(check-update)/index.tsx
 * ----------------------
 *
 * Initial app screen (check update / splash-like).
 *
 * Purpose:
 * - Displays the app logo and current version at startup.
 * - Acts as a placeholder for update checks before navigation continues.
 *
 * Future Enhancements:
 * - Uncomment and configure the `Sheet` component to show a bottom sheet
 *   when an update is required (e.g., force update flow).
 * - Integrate `expo-updates` for dynamic update checks.
 *
 * Example Flow:
 * 1. User opens the app → this screen shows first.
 * 2. If update required → display bottom sheet prompt.
 * 3. Else → navigate to Onboarding/Auth/Main based on persisted state.
 *
 * Author: Victor U.
 * Created: Sept 2025
 */
import { Button } from '@tryftai/components/atoms/button';
import { Text } from '@tryftai/components/atoms/text';
import { Sheet, useSheetRef } from '@tryftai/components/molecules/bottom-sheet';
import { useAuthUserStore } from '@tryftai/hooks/store/useAuthUserStore';
import { useOnboarding } from '@tryftai/hooks/store/useOnboardingStore';
import Config from '@tryftai/libs/config/env';
import { Image } from 'expo-image';
import { Href, router } from 'expo-router';
import * as Updates from 'expo-updates';
import { useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert, ImageBackground, View } from 'react-native';

const Screen = () => {
  const { viewedOnboarding } = useOnboarding();

  const updateSheetRefHandler = useSheetRef();

  const { isLoggedIn } = useAuthUserStore();

  const redirectUrl = (
    !viewedOnboarding ? '/onboarding' : isLoggedIn ? '/main' : '/authentication/sign-in.screen'
  ) as Href;

  console.log({ isLoggedIn, redirectUrl });

  const onFetchUpdateAsync = useCallback(async () => {
    try {
      if (
        Config.app_channel?.toLowerCase() === 'staging' ||
        Config.app_channel?.toLowerCase() === 'production'
      ) {
        const update = await Updates.checkForUpdateAsync();

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          updateSheetRefHandler.current?.present();
        } else {
          router.replace(redirectUrl);
        }
      } else {
        const timeout = setTimeout(() => {
          router.replace(redirectUrl);
          // updateSheetRefHandler.current?.present();
        }, 2000);
        updateSheetRefHandler.current?.dismiss();

        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.log(error);
      if (
        Config.app_channel?.toLowerCase() === 'staging' ||
        Config.app_channel?.toLowerCase() === 'production'
      ) {
        Alert.alert('Failed', `Tryft AI was unable to apply latest updates.`, [
          {
            text: 'Proceed without updates',
            isPreferred: true,
            onPress: () => {
              router.replace(redirectUrl);
            },
          },
          {
            text: 'Try again',
            onPress: async () => {
              const update = await Updates.checkForUpdateAsync();

              if (update.isAvailable) {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
              }
            },
          },
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectUrl]);

  useEffect(() => {
    void onFetchUpdateAsync();
  }, [onFetchUpdateAsync]);

  return (
    <View className="flex-1 bg-primary-500">
      <ImageBackground
        source={require('@tryftai/assets/images/onboarding/check-update-bg.png')}
        style={{ flex: 1 }}>
        <View className="flex-1">
          <View className="flex-[0.9] items-center justify-center gap-5">
            <Image
              className="h-[250px] w-[250px]"
              contentFit="contain"
              source={require('@tryftai/assets/icon.png')}
              style={{
                width: 100,
                height: 100,
              }}
            />
            <Text className="text-3xl font-bold text-white">Tryft AI</Text>
          </View>
          <View className="mb-12 flex-[0.1] justify-end gap-4">
            {/* <LoadingDots inverseColors /> */}
            <ActivityIndicator color="white" />
            <View className="flex-row items-center justify-center">
              <View className="rounded-full bg-white/5 px-8 py-4">
                <Text className="text-center text-sm text-white">
                  version 1.0.0
                  {Config.app_channel === 'development'
                    ? ' (DEV)'
                    : Config.app_channel === 'staging'
                      ? ' (BETA)'
                      : null}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Sheet
        ref={updateSheetRefHandler}
        enableDismissOnClose={false}
        backDropBehavior="none"
        enablePanDownToClose={false}
        enableHandlePanningGesture={false}
        snapPoints={['35%']}>
        <View className="mx-6 flex-1">
          <View className="flex-1">
            <View className="mt-2 flex-1 items-center justify-center gap-4">
              <Text className="text-center text-3xl">Update Required</Text>
              <Text className="text-center">
                Get the newest version of Rentt for improved performance, fresh features, and the
                best possible service.
              </Text>
            </View>
            <View className="mb-12 gap-3">
              <Button
                title="Update Now"
                onPress={() => {
                  Updates.reloadAsync();
                  updateSheetRefHandler.current?.dismiss();
                }}
              />
            </View>
          </View>
        </View>
      </Sheet>
    </View>
  );
};

export default Screen;

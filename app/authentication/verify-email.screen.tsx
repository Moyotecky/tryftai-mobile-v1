/**
 * app/authentication/sign-up.screen.tsx
 *
 * Allows users to sign up with email address.
 * Uses KeyboardAwareScrollView to keep inputs visible when keyboard opens.
 * Includes:
 *  - Illustration at the top
 *  - Email input
 *  - Sign up button
 *  - Link to terms and conditions/Privacy Policy (not implemented yet)
 *
 * Uses reusable components: Input, Button, Text.
 * Styled with NativeWind.
 *
 * Author: Victor U.
 * Created: Sept 2025
 *
 */

import { Ionicons } from '@expo/vector-icons';
import { useResendOtp } from '@tryftai/api/hooks/auth/useResendOtp.hook';
import { useVerifyOtp } from '@tryftai/api/hooks/auth/useVerifyOtp.hook';
import { PinInput } from '@tryftai/components/atoms/pin-input';
import { Text } from '@tryftai/components/atoms/text';
import { useAuthUserStore } from '@tryftai/hooks/store/useAuthUserStore';
import { useFullScreenLoadingStore } from '@tryftai/hooks/store/useFullScreenLoadingStore';
import { formatApiError } from '@tryftai/libs/utils/error-handler';
import { Notify } from '@tryftai/libs/utils/toast.config';
import { updateStorageAccessToken } from '@tryftai/libs/utils/token';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = () => {
  const { email, type } = useLocalSearchParams();
  const { updateAccessToken } = useAuthUserStore();

  const { isLoading, startLoading, stopLoading } = useFullScreenLoadingStore();

  const [code, setCode] = useState<string>('');
  const [pinReady, setPinReady] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  const verifyOtpMutation = useVerifyOtp();
  const resendOtpMutation = useResendOtp();

  useEffect(() => {
    if (pinReady && code.length === 6) {
      startLoading();
      verifyOtpMutation.mutate(
        { email: email as string, otp: code },
        {
          onSettled: () => {
            stopLoading();
          },
          onError: (err) => {
            Notify('error', {
              message: 'Error',
              description: formatApiError(err),
            });
          },
          onSuccess: async (data) => {
            console.log('Verify Email Data', data);
            Notify('success', {
              message: 'Success',
              description: data?.message,
            });
            if (type === 'create-account') {
              updateAccessToken(data?.accessToken?.accessToken);
              await updateStorageAccessToken(data?.accessToken?.accessToken);
            }
            router.push(
              type === 'create-account'
                ? '/authentication/choose-plan.screen'
                : '/authentication/reset-password.screen'
            );
          },
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, pinReady]);

  // Resend countdown logic
  useEffect(() => {
    if (resendTimer === 0) return; // stop if reached zero

    const interval = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [resendTimer]);

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      resendOtpMutation.mutate(
        { email: email as string },
        {
          onSuccess: () => {
            Notify('success', { message: 'OTP resent', description: `Code sent to ${email}` });
          },
          onSettled: () => {
            setResendTimer(60);
          },
          onError: (err) => {
            Notify('error', {
              message: 'Error',
              description: formatApiError(err),
            });
          },
        }
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background_light-500">
      <View className="ml-4 items-start pr-2">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            }
          }}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView className="flex-1" contentContainerClassName="flex-grow">
        <View className="h-2/5 items-center justify-center">
          <Image
            source={require('@tryftai/assets/images/auth/login/illustration.png')}
            className="h-40 w-40"
          />
        </View>
        <View className="h-3/5 justify-between px-6 pt-5">
          <View className="gap-2">
            <Text weight="bold" className="text-4xl text-dark_blue-500">
              Verify Email
            </Text>
            <Text className="text-lg leading-6 text-ink-500" weight="medium">
              Please enter the 6-digit code just sent to
              <Text className="text-lg leading-6 text-ink-500" weight="bold">
                {' '}
                {email}
              </Text>
            </Text>
          </View>
          <View className="mt-5 flex-1 gap-3">
            <PinInput code={code} maxLength={6} setCode={setCode} setPinReady={setPinReady} />
          </View>

          <View className="mb-10 gap-3">
            <View className="flex-row flex-wrap items-center justify-start gap-1">
              {isLoading ? (
                <Text weight="bold" className="text-ink-500">
                  Verifying...
                </Text>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={handleResend}
                  disabled={resendTimer > 0} // disable until countdown ends
                >
                  {resendOtpMutation?.isPending ? (
                    <ActivityIndicator color="#000" />
                  ) : (
                    <Text
                      weight="bold"
                      className={resendTimer > 0 ? 'text-ink-500' : 'text-primary-500'}>
                      {resendTimer > 0 ? `Resend code in ${formatTime(resendTimer)}` : 'Resend'}
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Screen;

/**
 * app/authentication/sign-in.screen.tsx
 *
 * Allows users to sign in with email and password.
 * Uses KeyboardAwareScrollView to keep inputs visible when keyboard opens.
 * Includes:
 *  - Illustration at the top
 *  - Email and Password inputs
 *  - Sign In button
 *  - Link to chat with support (not implemented yet)
 *
 * Uses reusable components: Input, Button, Text.
 * Styled with NativeWind.
 *
 * Author: Victor U.
 * Created: Sept 2025
 *
 */

import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  LoginUserEmailRequest,
  LoginUserEmailRequestSchema,
} from '@tryftai/api/contracts/auth/login-user-account.contract';
import { useLoginUserAccount } from '@tryftai/api/hooks/auth/useLoginUser.hook';
import { Button } from '@tryftai/components/atoms/button';
import { FormInput } from '@tryftai/components/atoms/input/form-input';
import { Text } from '@tryftai/components/atoms/text';
import { formatApiError } from '@tryftai/libs/utils/error-handler';
import { Notify } from '@tryftai/libs/utils/toast.config';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Image, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = () => {
  const loginUserMutation = useLoginUserAccount();

  const form = useForm<LoginUserEmailRequest>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(LoginUserEmailRequestSchema),
  });

  const handleSubmit = form.handleSubmit((values) => {
    loginUserMutation.mutate(values, {
      onSuccess: (data) => {
        console.log('user login successful', data);
        // navigate to dashboard
      },
      onError: (err) => {
        Notify('error', {
          message: 'Error',
          description: formatApiError(err),
        });
      },
    });
  });

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
        <View className="h-2/6 items-center justify-center">
          <Image
            source={require('@tryftai/assets/images/auth/login/illustration.png')}
            className="h-40 w-40"
          />
        </View>
        <View className="h-4/6 justify-between px-6 pt-5">
          <View className="gap-2">
            <Text weight="bold" className="text-4xl text-dark_blue-500">
              Sign In
            </Text>
            <Text className="text-lg leading-6 text-ink-500" weight="medium">
              Simply enter your phone number to login or create an account.
            </Text>
          </View>
          <View className="mt-5 flex-1 gap-3">
            <FormInput
              label="Email Address"
              name="email"
              control={form.control}
              error={form?.formState?.errors?.email?.message}
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              returnKeyType="next"
              textContentType="emailAddress"
            />
            <FormInput
              label="Password"
              name="password"
              control={form.control}
              error={form?.formState?.errors?.password?.message}
              autoCapitalize="none"
              autoComplete="password"
              secureTextEntry
            />
            <View className="items-start">
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  router.navigate('/authentication/forgot-password.screen');
                }}>
                <Text className="items-start text-primary-500" weight="semi_bold">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="gap-4 pb-6">
            <Button
              title="sign in"
              onPress={handleSubmit}
              isLoading={loginUserMutation.isPending}
            />
            <View className="flex-row flex-wrap items-center justify-center gap-1">
              <Text className="text-ink-400">
                Having issues signing in, kindly contact support from here.
              </Text>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  router.navigate('/authentication/sign-in.screen');
                }}>
                <Text weight="bold" className="text-primary-500">
                  Chat with us
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Screen;

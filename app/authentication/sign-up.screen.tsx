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
import { Button } from '@tryftai/components/atoms/button';
import { Input } from '@tryftai/components/atoms/input';
import { Text } from '@tryftai/components/atoms/text';
import { router } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = () => {
  return (
    <SafeAreaView className="bg-background_light-500 flex-1">
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
            <Text weight="bold" className="text-dark_blue-500 text-4xl">
              Get started
            </Text>
            <Text className="text-ink-500 text-lg leading-6" weight="medium">
              Simply enter your email address to login or create an account.
            </Text>
          </View>
          <View className="mt-5 flex-1 gap-3">
            <Input label="Email Address" />
          </View>

          <View className="gap-4">
            <View className="flex-row flex-wrap items-center justify-center gap-1">
              <Text className="text-ink-400">By using our mobile app, you agree to our</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  router.navigate('/authentication/sign-in.screen');
                }}>
                <Text weight="bold" className="text-ink-600 underline">
                  Terms of Use
                </Text>
              </TouchableOpacity>
              <Text>and</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  router.navigate('/authentication/sign-in.screen');
                }}>
                <Text weight="bold" className="text-ink-600 underline">
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              title="continue"
              onPress={() => router.navigate('/authentication/verify-email.screen')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Screen;

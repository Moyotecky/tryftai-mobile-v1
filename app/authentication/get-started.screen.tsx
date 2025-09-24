/**
 * app/authentication/get-started.screen.tsx
 *
 * First screen for new users to introduce TryftAI features.
 * Includes:
 *  - Illustration at the top
 *  - Feature list with checkmarks
 *  - "Get Started" button to navigate to Sign Up
 *  - Link to Sign In for existing users
 *
 * Author: Victor U.
 * Created: Sept 2025
 *
 */

import { Ionicons } from '@expo/vector-icons';
import { Button } from '@tryftai/components/atoms/button';
import { Text } from '@tryftai/components/atoms/text';
import { router } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';

const features = [
  'Create goals & vaults with AI guidance',
  'Join squads & challenges to stay motivated',
  'Deposit, withdraw & send money instantly',
];

const Screen = () => {
  return (
    <View className="flex-1 bg-dark_blue-500">
      <View className="flex-[0.5] items-center justify-center">
        <Image
          source={require('@tryftai/assets/images/auth/get-started/card.png')}
          className="h-[80%] w-[80%]"
        />
      </View>
      <View className="flex-[0.5] rounded-t-3xl bg-white px-6 pt-8">
        <View className="flex-1">
          <View className="gap-2">
            <Text weight="bold" className="text-3xl text-dark_blue-500">
              Welcome to TryftAI
            </Text>
            <Text className="text-lg leading-6 text-ink-500" weight="medium">
              Let’s setup your account for you as this is the first step to financial success.
            </Text>
          </View>
          <View className="mt-5">
            {features?.map((item) => (
              <View key={item} className="flex-row items-center gap-2 py-2">
                <Ionicons name="checkmark" size={28} color="#0891b2" />
                <Text className="text-lg leading-6 text-ink-500" weight="medium">
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View className="items-center justify-end gap-4 pb-16">
          <Button
            title="Get Started"
            onPress={() => router.navigate('/authentication/sign-up.screen')}
          />
          <View className="flex-row items-center gap-1">
            <Text>I already have an account.</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                router.navigate('/authentication/sign-in.screen');
              }}>
              <Text weight="bold" className="text-primary-500">
                sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Screen;

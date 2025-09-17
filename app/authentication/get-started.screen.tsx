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
    <View className="bg-dark_blue-500 flex-1">
      <View className="flex-[0.5] items-center justify-center">
        <Image
          source={require('@tryftai/assets/images/auth/get-started/card.png')}
          className="h-[80%] w-[80%]"
        />
      </View>
      <View className="flex-[0.5] rounded-t-3xl bg-white px-6 pt-8">
        <View className="flex-1">
          <View className="gap-2">
            <Text weight="bold" className="text-dark_blue-500 text-3xl">
              Welcome to TryftAI
            </Text>
            <Text className="text-ink-500 text-lg leading-6" weight="medium">
              Let’s setup your account for you as this is the first step to financial success.
            </Text>
          </View>
          <View className="mt-5">
            {features?.map((item) => (
              <View key={item} className="flex-row items-center gap-2 py-2">
                <Ionicons name="checkmark" size={28} color="#0891b2" />
                <Text className="text-ink-500 text-lg leading-6" weight="medium">
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

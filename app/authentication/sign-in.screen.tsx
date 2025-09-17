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
    <KeyboardAwareScrollView
      className="bg-background_light-500 flex-1"
      contentContainerClassName="flex-grow">
      <SafeAreaView>
        <View className="h-2/5">
          <View className="ml-4">
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
          <View className="flex-1 items-center justify-center">
            <Image
              source={require('@tryftai/assets/images/auth/login/illustration.png')}
              className="h-40 w-40"
            />
          </View>
        </View>
        <View className="h-3/5 justify-between px-6 pt-5">
          <View className="gap-2">
            <Text weight="bold" className="text-dark_blue-500 text-4xl">
              Sign In
            </Text>
            <Text className="text-ink-500 text-lg leading-6" weight="medium">
              Simply enter your phone number to login or create an account.
            </Text>
          </View>
          <View className="mt-5 flex-1 gap-4">
            <Input label="Email Address" />
            <Input label="Password" />
          </View>
          <View className="justify-start-start mb-7">
            <TouchableOpacity activeOpacity={0.9}>
              <Text className="text-primary-500 items-start" weight="semi_bold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View className="gap-4">
            <Button
              title="sign in"
              // onPress={() => router.navigate('/authentication/sign-up.screen')}
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Screen;

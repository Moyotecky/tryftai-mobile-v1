import { Text } from '@tryftai/components/atoms';
import {
  Header,
  MonthDiff,
  Score,
  TopExpenses,
  YourTopSavings,
} from '@tryftai/components/modules/home';
import { GradientBg } from '@tryftai/components/molecules/gradient-bg';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

const Screen = () => {
  return (
    <SafeAreaView className="flex-1">
      <GradientBg bottomFill="#fafbfd" />
      <View
        className="mt-4 flex-row items-center justify-between"
        style={{ marginHorizontal: 16, paddingBottom: 20 }}>
        <View>
          <Text className="text-[#BDB5FF]" weight="medium">
            Good Morning!
          </Text>
          <Text className="text-lg text-white" weight="bold">
            Moyosoluwalorun Alabi 👋
          </Text>
        </View>
        <View className="flex flex-row gap-4">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => router.push('/main/private/home/scan-qr.screen', { withAnchor: true })}>
            <Image
              source={require('@tryftai/assets/images/home/scan.svg')}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <Image
            source={require('@tryftai/assets/images/home/robot.svg')}
            style={{ width: 25, height: 25 }}
          />
          <Image
            source={require('@tryftai/assets/images/home/bell.svg')}
            style={{ width: 25, height: 25 }}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View className="flex-1 bg-background_light-100 px-4 pt-5">
          <TopExpenses />
          <YourTopSavings />
          <MonthDiff />
          <Score />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;

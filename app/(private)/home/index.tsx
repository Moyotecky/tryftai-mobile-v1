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
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <View className="flex-1">
      <GradientBg bottomFill="#F6F7F8" />
      <SafeAreaView>
        <View
          className="mt-4 flex flex-row items-center justify-between"
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
            <TouchableOpacity onPress={() => router.push('/qr-code/scan-qr')}>
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
        <ScrollView
          contentContainerClassName="flex-grow"
          className="flex-1"
          showsVerticalScrollIndicator={false}>
          <Header />
          <View className=" bg-background_light-500 px-4 pb-20 pt-5">
            <TopExpenses />
            <YourTopSavings />
            <MonthDiff />
            <Score />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

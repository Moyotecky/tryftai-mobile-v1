

import { Text } from '@tryftai/components/atoms'
import { Header, MonthDiff, Score, TopExpenses, YourTopSavings } from '@tryftai/components/modules/home'
import { GradientBg } from '@tryftai/components/molecules/gradient-bg'
import { Image } from 'expo-image'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Home() {

    return (
        <View className='flex-1'>


            <GradientBg />

            <SafeAreaView>

                <View className="flex justify-between flex-row mt-4 items-center" style={{ marginHorizontal: 16, paddingBottom: 20 }}>
                    <View>
                        <Text className="text-[#BDB5FF]" weight="medium">
                            Good Morning!
                        </Text>
                        <Text className="text-white text-lg" weight="bold">
                            Moyosoluwalorun Alabi 👋
                        </Text>
                    </View>
                    <View className="flex flex-row gap-4">
                        <Image source={require('@tryftai/assets/images/home/scan.svg')} style={{ width: 25, height: 25 }} />
                        <Image source={require('@tryftai/assets/images/home/robot.svg')} style={{ width: 25, height: 25 }} />
                        <Image source={require('@tryftai/assets/images/home/bell.svg')} style={{ width: 25, height: 25 }} />
                    </View>
                </View>
                <ScrollView    >
                    <Header />
                    <View className=' bg-background_light-500 px-4 pt-5 pb-20'>
                        <TopExpenses />
                        <YourTopSavings />
                        <MonthDiff />
                        <Score />
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}

import { Text } from '@tryftai/components'
import { Header, MonthDiff, Score, TopExpenses, YourTopSavings } from '@tryftai/screens/home'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export default function Home() {
    const { top } = useSafeAreaInsets()
    const GradientBg = ({ children, style }: { children: React.ReactNode; style: ViewStyle }) => {
        return <LinearGradient
            colors={['#0F766E', '#0891B2']}
            style={style}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            {children}
        </LinearGradient>
    }
    return (
        <>
            <GradientBg
                style={{ width: '100%', position: 'absolute', zIndex: 1000 }}
            >
                <View className="flex justify-between flex-row mt-4 items-center" style={{ marginTop: top + 20, marginHorizontal: 16, paddingBottom: 20 }}>
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
            </GradientBg>

            <ScrollView
                contentContainerStyle={{ paddingTop: top }}
            >
                <GradientBg
                    style={{ width: '100%', }}
                >
                    <Header />
                </GradientBg>
                <View className=' px-4 pt-5 pb-20'>
                    <TopExpenses />
                    <YourTopSavings />
                    <MonthDiff />
                    <Score />
                </View>
            </ScrollView>

        </>
    )
}

import { Container, Text } from '@tryftai/components'
import { Header, MonthDiff, Score, TopExpenses, YourTopSavings } from '@tryftai/screens/home'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export default function Home() {
    const { top } = useSafeAreaInsets()
    return (
        <>
            <LinearGradient
                colors={['#0F766E', '#0891B2']}
                style={{ height: 375, width: '100%', position: 'absolute' }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />

            {/* Greeting */}
            <View className="flex justify-between flex-row mt-4 items-center" style={{ marginTop: top + 20, marginHorizontal: 16 }}>
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

            <ScrollView>
                <Container>
                    <Header />

                    <TopExpenses />

                    <YourTopSavings />

                    <MonthDiff />

                    <Score />
                </Container>
            </ScrollView>
        </>
    )
}
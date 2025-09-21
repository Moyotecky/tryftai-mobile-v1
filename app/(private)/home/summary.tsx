import { TopExpenses } from '@tryftai/components/modules/home'
import { BackHeader, Card } from '@tryftai/components/molecules'
import { GradientBg } from '@tryftai/components/molecules/gradient-bg'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Summary() {
    return (
        <SafeAreaView>
            <GradientBg />
            <BackHeader
                title='Summary'
                containerClassName='text-white'
                titleClassName='text-white'
            />
            <ScrollView contentContainerClassName='' >
                <View className=''>
                    <Card className='h-[400] relative z-10 m-4'>

                    </Card>
                    <View className='bg-[#F6F7F8] relative -top-[80] pt-[100] p-4 -z-0'>
                        <TopExpenses />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
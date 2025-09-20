import { TopExpenses } from '@tryftai/components/modules/home'
import { BackHeader, Card } from '@tryftai/components/molecules'
import { GradientBg } from '@tryftai/components/molecules/gradient-bg'
import { ScrollView, View } from 'react-native'

export default function Summary() {
    return (
        <ScrollView contentContainerClassName='flex-1' >
            <GradientBg />
            <BackHeader
                title='Summary'
                containerClassName='text-white'
                titleClassName='text-white'
            />

            <View className=''>
                <Card className='h-[400]    m-4'>

                </Card>
                <View className='bg-white h-[500] p-4'>
                    <TopExpenses />
                </View>
            </View>

        </ScrollView>
    )
}
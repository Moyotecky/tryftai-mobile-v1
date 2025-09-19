// Header.tsx
import Feather from '@expo/vector-icons/Feather'
import { Divider, Text } from '@tryftai/components'
import { formatPrice } from '@tryftai/helpers'
import { Image, ImageSource } from 'expo-image'
import { useState } from 'react'
import { Pressable, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type ActionCardProps = {
    icon: ImageSource
    label: string
    onPress?: () => void
    style?: ViewStyle
}

export const ActionCard: React.FC<ActionCardProps> = ({ icon, label, onPress, style }) => {
    return (
        <Pressable onPress={onPress} className="items-center gap-2" style={style}>
            <View className="bg-primary-600 w-12 h-12 rounded-lg items-center justify-center">
                <Image source={icon} style={{ width: 20, height: 20 }} />
            </View>
            <Text className="text-white" weight="bold">
                {label}
            </Text>
        </Pressable>
    )
}

export function Header() {
    const { top } = useSafeAreaInsets()
    const [showBalance, setShowBalance] = useState(true)

    return (
        <View
            className="gap-8 px-4"
            style={{ paddingTop: top + 20, paddingBottom: 40 }}
        >

            {/* Balance */}
            <View>
                <View className="flex flex-row items-center gap-2">
                    <Text className="text-[#BDB5FF] text-lg" weight="medium">
                        Total Balance
                    </Text>
                    <Pressable onPress={() => setShowBalance(!showBalance)}>
                        <Feather name={showBalance ? "eye" : "eye-off"} size={18} color="#BDB5FF" />
                    </Pressable>
                </View>
                <Text className="text-white text-5xl mt-3" weight="bold">
                    {showBalance ? formatPrice(121765) : '*****'}
                </Text>
            </View>

            {/* Action Cards */}
            <View className="relative items-center">
                <View className="rounded-lg bg-white w-11/12 h-24 opacity-10" />
                <View className="absolute w-11/12 h-24 p-3 flex flex-row items-center justify-evenly">
                    <ActionCard
                        icon={require('@tryftai/assets/images/home/savings.svg')}
                        label="Savings"
                    />
                    <Divider orientation='vertical' length={50} className='opacity-30' />
                    <ActionCard
                        icon={require('@tryftai/assets/images/home/withdraw.svg')}
                        label="Withdraw"
                    />
                    <Divider orientation='vertical' length={50} className='opacity-30' />
                    <ActionCard
                        icon={require('@tryftai/assets/images/home/deposit.svg')}
                        label="Deposit"
                    />
                </View>
            </View>

        </View>
    )
}

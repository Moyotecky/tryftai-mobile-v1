// Header.tsx
import Feather from '@expo/vector-icons/Feather';
import { Divider, Text } from '@tryftai/components/atoms';
import { formatPrice } from '@tryftai/helpers';
import { Image, ImageSource } from 'expo-image';
import { useState } from 'react';
import { Pressable, View, ViewStyle } from 'react-native';

type ActionCardProps = {
  icon: ImageSource;
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export const ActionCard: React.FC<ActionCardProps> = ({ icon, label, onPress, style }) => {
  return (
    <Pressable onPress={onPress} className="items-center gap-2" style={style}>
      <View className="h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
        <Image source={icon} style={{ width: 20, height: 20 }} />
      </View>
      <Text className="text-white" weight="bold">
        {label}
      </Text>
    </Pressable>
  );
};

export function Header() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <View className="gap-8 px-4" style={{ paddingBottom: 40 }}>
      {/* Balance */}
      <View>
        <View className="flex flex-row items-center gap-2">
          <Text className="text-lg text-[#BDB5FF]" weight="medium">
            Total Balance
          </Text>
          <Pressable onPress={() => setShowBalance(!showBalance)}>
            <Feather name={showBalance ? 'eye' : 'eye-off'} size={18} color="#BDB5FF" />
          </Pressable>
        </View>
        <Text className="mt-3 !text-5xl text-white" weight="bold">
          {showBalance ? formatPrice(121765) : '*****'}
        </Text>
      </View>

      {/* Action Cards */}
      <View className="relative items-center">
        <View className="h-24 w-11/12 rounded-lg bg-white opacity-10" />
        <View className="absolute flex h-24 w-11/12 flex-row items-center justify-evenly p-3">
          <ActionCard icon={require('@tryftai/assets/images/home/savings.svg')} label="Savings" />
          <Divider orientation="vertical" length={50} className="opacity-30" />
          <ActionCard icon={require('@tryftai/assets/images/home/withdraw.svg')} label="Withdraw" />
          <Divider orientation="vertical" length={50} className="opacity-30" />
          <ActionCard icon={require('@tryftai/assets/images/home/deposit.svg')} label="Deposit" />
        </View>
      </View>
    </View>
  );
}

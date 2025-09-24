import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Divider, Text } from '@tryftai/components/atoms';
import { Card, ProgressBar } from '@tryftai/components/molecules';
import { formatPrice } from '@tryftai/helpers';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';

export function YourTopSavings() {
  return (
    <Card className="mt-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg" weight="semi_bold">
          Your Top savings
        </Text>
        <TouchableOpacity onPress={() => router.push('/home/summary')}>
          <Text className="text-gray-500">
            view all <FontAwesome6 name="arrow-right" size={12} color="#363D4E" />
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="mt-5 text-3xl" weight="bold">
        {formatPrice(121765)}
      </Text>
      <Text className="mt-4">
        <Text className="text-gray-500">out of</Text>{' '}
        <Text weight="semi_bold">
          {formatPrice(300000)} ({Math.round((121765 / 300000) * 100)}%){' '}
        </Text>
      </Text>

      <View className="mt-10 flex-row justify-between" style={{ marginBottom: 18 }}>
        <View className="gap-4">
          <Text>WEEKLY DEPOSIT</Text>
          <Text className="text-lg" weight="bold">
            {formatPrice(121765)}
          </Text>
        </View>
        <View className="items-end gap-4">
          <Text>EST, DATE DEPOSIT</Text>
          <Text className="text-lg" weight="bold">
            {formatPrice(121765)}
          </Text>
        </View>
      </View>
      <Divider className="my-3" />
      <View className="flex-row items-center justify-between pt-3">
        <Text weight="semi_bold" className="text-lg">
          Your progress
        </Text>
        <Text>{formatPrice(20000)} remaining</Text>
      </View>
      <ProgressBar progress={0.9} className="mt-5" />
      <View className="mt-5 flex-row items-center rounded-lg bg-primary-100 p-4">
        <View
          style={{ width: 40, height: 40, backgroundColor: 'white' }}
          className={`items-center justify-center rounded-full`}>
          <Image
            source={require('@tryftai/assets/images/home/hour-glass.svg')}
            style={{ width: 20, height: 20 }}
          />
        </View>
        <View className="px-5">
          <Text className="px-5 text-xl">Almost there! you will reach your goal in 2 weeks.</Text>
        </View>
      </View>
    </Card>
  );
}

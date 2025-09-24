import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text } from '@tryftai/components/atoms';
import { BackHeader } from '@tryftai/components/molecules';
import { GradientBg } from '@tryftai/components/molecules/gradient-bg';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import QRCode from 'react-qr-code';

const Screen = () => {
  return (
    <SafeAreaView className=" flex-1">
      <GradientBg />
      <BackHeader
        title=""
        headerRight={<AntDesign name="questioncircleo" size={24} color="white" />}
      />
      <View className="flex-1 items-center justify-center">
        <View className="w-10/12 items-center rounded-3xl bg-white pb-20">
          <View className="absolute -top-14 z-50 h-28 w-28 rounded-full bg-primary-300"></View>

          <View className="mb-12 mt-5 h-36 w-full items-center justify-center rounded-t-3xl bg-gray-100">
            <Text className="text-2xl" weight="bold">
              Moyosoluwalorun Alabi
            </Text>
            <Text className="text-1xl mt-2 text-center">@moyotecky</Text>
          </View>
          <QRCode value="hey" />
        </View>

        <TouchableOpacity
          className="mt-5 flex-row items-center gap-2"
          onPress={() => router.push('/qr-code/account-details')}>
          <Text className="text-white" weight="bold">
            Account details
          </Text>
          <FontAwesome name="arrow-right" color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute bottom-0 w-8/12 flex-row justify-center gap-4 text-center"
          onPress={() => router.replace('/qr-code/scan-qr')}>
          <Image
            source={require('@tryftai/assets/images/qr/camera.svg')}
            style={{ width: 25, height: 25 }}
          />
          <Text className="text-center text-2xl text-white" weight="semi_bold">
            Scan QR code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

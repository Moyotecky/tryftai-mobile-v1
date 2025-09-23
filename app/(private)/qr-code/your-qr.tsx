import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "@tryftai/components/atoms";
import { BackHeader } from "@tryftai/components/molecules";
import { GradientBg } from "@tryftai/components/molecules/gradient-bg";
import { Image } from "expo-image";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import QRCode from "react-qr-code";



export default function YourQR() {


    return (
        <SafeAreaView className=" flex-1">
            <GradientBg />
            <BackHeader
                title=""
                headerRight={<AntDesign name="questioncircleo" size={24} color="white" />}
            />
            <View className="flex-1 items-center justify-center">

                <View className="bg-white items-center w-10/12 rounded-3xl pb-20">

                    <View className="w-28 h-28 bg-primary-300 absolute z-50 -top-14 rounded-full">

                    </View>

                    <View className="h-36 mt-5 justify-center mb-12 w-full items-center bg-gray-100 rounded-t-3xl">
                        <Text className="text-2xl" weight="bold">
                            Moyosoluwalorun Alabi
                        </Text>
                        <Text className="text-center text-1xl mt-2">@moyotecky</Text>
                    </View>
                    <QRCode value="hey" />

                </View>

                <TouchableOpacity className="mt-5 flex-row items-center gap-2" onPress={() => router.push('/qr-code/account-details')}>
                    <Text className="text-white" weight="bold">
                        Account details
                    </Text>
                    <FontAwesome name="arrow-right" color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity className="text-center w-8/12 bottom-0 absolute flex-row gap-4 justify-center" onPress={() => router.replace('/qr-code/scan-qr')}>

                    <Image source={require('@tryftai/assets/images/qr/camera.svg')} style={{ width: 25, height: 25 }} />
                    <Text className="text-2xl text-white text-center" weight="semi_bold">
                        Scan QR code
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "@tryftai/components/atoms";
import { BackHeader } from "@tryftai/components/molecules";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ScannerBox() {
    return (
        <View className="items-center justify-center">
            <View className="w-96 h-96 relative ">
                {/* Camera */}
                <CameraView className="flex-1" facing="back" />

                {/* Corner markers */}
                <View className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-primary-400 rounded-tl-2xl" />
                <View className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-primary-400 rounded-tr-2xl" />
                <View className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-primary-400 rounded-bl-2xl" />
                <View className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-primary-400 rounded-br-2xl" />
            </View>
        </View>
    );
}

export default function ScanQR() {
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
    }, [permission, requestPermission]);

    if (!permission) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center bg-dark_blue-400">
                <ActivityIndicator color="white" size="large" />
            </SafeAreaView>
        );
    }

    if (!permission.granted) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center bg-dark_blue-400">
                <AntDesign name="closecircleo" size={48} color="white" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="bg-dark_blue-400 flex-1">
            <BackHeader
                title=""
                headerRight={<AntDesign name="questioncircleo" size={24} color="white" />}
            />
            <View className="flex-1 items-center mt-40">
                <ScannerBox />

                <View className="text-center w-8/12 bottom-32 absolute  gap-6">
                    <Text className="text-3xl text-white text-center" weight="bold">
                        Scan QR code
                    </Text>
                    <Text className="text-1xl text-white text-center" >
                        Point camera to the QR code to transfer or request money.
                    </Text>
                </View>
                <TouchableOpacity className="text-center w-8/12 bottom-0 absolute flex-row gap-4 justify-center" onPress={() => router.replace('/qr-code/your-qr')}>

                    <Image source={require('@tryftai/assets/images/home/scan.svg')} style={{ width: 25, height: 25 }} />
                    <Text className="text-2xl text-white text-center" weight="semi_bold">
                        Go to your QR code
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

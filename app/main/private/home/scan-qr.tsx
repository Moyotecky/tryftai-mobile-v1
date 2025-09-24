import AntDesign from '@expo/vector-icons/AntDesign';
import { Text } from '@tryftai/components/atoms';
import { BackHeader } from '@tryftai/components/molecules';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// function ScannerBox() {
//   return (
//     <View className="items-center justify-center">
//       <View className="relative h-96 w-96 ">
//         {/* Camera */}
//         <CameraView className="flex-1" facing="back" />

//         {/* Corner markers */}
//         <View className="absolute left-0 top-0 h-10 w-10 rounded-tl-2xl border-l-4 border-t-4 border-primary-400" />
//         <View className="absolute right-0 top-0 h-10 w-10 rounded-tr-2xl border-r-4 border-t-4 border-primary-400" />
//         <View className="absolute bottom-0 left-0 h-10 w-10 rounded-bl-2xl border-b-4 border-l-4 border-primary-400" />
//         <View className="absolute bottom-0 right-0 h-10 w-10 rounded-br-2xl border-b-4 border-r-4 border-primary-400" />
//       </View>
//     </View>
//   );
// }

const Screen = () => {
  // const [permission, requestPermission] = useCameraPermissions();

  // useEffect(() => {
  //   if (!permission) {
  //     requestPermission();
  //   }
  // }, [permission, requestPermission]);

  // if (!permission) {
  //   return (
  //     <SafeAreaView className="flex-1 items-center justify-center bg-dark_blue-400">
  //       <ActivityIndicator color="white" size="large" />
  //     </SafeAreaView>
  //   );
  // }

  // if (!permission.granted) {
  //   return (
  //     <SafeAreaView className="flex-1 items-center justify-center bg-dark_blue-400">
  //       <AntDesign name="closecircleo" size={48} color="white" />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView className="flex-1 bg-dark_blue-400">
      <BackHeader
        title=""
        headerRight={<AntDesign name="questioncircleo" size={24} color="white" />}
      />
      <View className="mt-40 flex-1 items-center">
        {/* <ScannerBox /> */}

        <View className="absolute bottom-32 w-8/12 gap-6  text-center">
          <Text className="text-center text-3xl text-white" weight="bold">
            Scan QR code
          </Text>
          <Text className="text-1xl text-center text-white">
            Point camera to the QR code to transfer or request money.
          </Text>
        </View>
        <TouchableOpacity
          className="absolute bottom-0 w-8/12 flex-row justify-center gap-4 text-center"
          onPress={() => router.replace('/qr-code/your-qr')}>
          <Image
            source={require('@tryftai/assets/images/home/scan.svg')}
            style={{ width: 25, height: 25 }}
          />
          <Text className="text-center text-2xl text-white" weight="semi_bold">
            Go to your QR code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

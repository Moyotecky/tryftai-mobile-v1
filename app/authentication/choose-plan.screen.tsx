import { Ionicons } from '@expo/vector-icons';
import { useUpdateAccountType } from '@tryftai/api/hooks/auth/useUpdateAccountType.hook';
import { Button } from '@tryftai/components/atoms/button';
import { Text } from '@tryftai/components/atoms/text';
import { useAuthUserStore } from '@tryftai/hooks/store/useAuthUserStore';
import { useFullScreenLoadingStore } from '@tryftai/hooks/store/useFullScreenLoadingStore';
import { formatApiError } from '@tryftai/libs/utils/error-handler';
import { Notify } from '@tryftai/libs/utils/toast.config';
import { getStorageAccessToken } from '@tryftai/libs/utils/token';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { memo, useRef } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<any>);

const data = [
  {
    id: '1',
    title: 'Student Plan',
    description: [
      'Save or invest any amount',
      'Automate your savings and investments',
      'Earn attractive returns',
      'Access to Nest - an investment account for kids',
    ],
    icon: require('@tryftai/assets/images/onboarding/1.png'),
    buttonTitle: 'Start with this',
    accountType: 'Student',
  },
  {
    id: '2',
    title: 'Individual/Employer',
    description: [
      'Invest spare business cash safely',
      'Earn higher returns than banks',
      'Access securities from top asset managers',
      'Access to Nest - an investment account for kids',
    ],
    icon: require('@tryftai/assets/images/onboarding/1.png'),
    buttonTitle: 'I Prefer This',
    accountType: 'Individual/Employer',
  },
];

type CardProps = {
  item: (typeof data)[0];
  index: number;
  scrollX: SharedValue<number>;
  onCardPress: () => void;
};

const SPACING = 16;
const CARD_WIDTH = width * 0.8;
const SNAP_INTERVAL = CARD_WIDTH + SPACING;

const Screen = () => {
  const { startLoading, stopLoading } = useFullScreenLoadingStore();
  const flatListRef = useRef<FlatList<any>>(null);
  const scrollX = useSharedValue(0);

  const { updateUser, currentUser } = useAuthUserStore();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const token = void getStorageAccessToken();

  console.log('ACCESS TOKEN ====> ', token, currentUser);

  const updateAccountTypeMutation = useUpdateAccountType();

  const handleSelectAccountType = (accountType: 'Student' | 'Individual/Employer') => {
    startLoading();
    updateAccountTypeMutation.mutate(
      { accountType },
      {
        onError: (err) => {
          Notify('error', {
            message: 'Error',
            description: formatApiError(err),
          });
        },
        onSettled: () => {
          stopLoading();
        },
        onSuccess: (data) => {
          updateUser(data);
          router.navigate({
            pathname: '/authentication/personal-info.screen',
            params: {
              accountType,
            },
          });
        },
      }
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background_light-500">
      <LinearGradient
        colors={['#0891B2', '#0F766E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View className="items-end px-5 pt-6">
        <TouchableOpacity
          activeOpacity={0.9}
          className="h-10 w-10 items-center justify-center rounded-full bg-white"
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            }
          }}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="justify-between">
        <View className="mt-5 items-center justify-center">
          <Text className="text-3xl text-white" weight="bold">
            Choose a Plan
          </Text>
          <Text className="text-lg text-white" weight="medium">
            Select what best describes you
          </Text>
        </View>
        <View className="h-[75%] items-center justify-center">
          <AnimatedFlatList
            ref={flatListRef}
            data={data}
            className="flex-1"
            renderItem={({ item, index }) => (
              <Card
                item={item}
                index={index}
                scrollX={scrollX}
                onCardPress={() => {
                  handleSelectAccountType(item?.accountType);
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            scrollEventThrottle={16}
            snapToInterval={SNAP_INTERVAL}
            snapToAlignment="center"
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: 30,
              paddingHorizontal: (width - CARD_WIDTH) / 3,
            }}
            onScroll={scrollHandler}
            onMomentumScrollEnd={(event) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const index = Math.round(offsetX / SNAP_INTERVAL);
              const newX = index * SNAP_INTERVAL;
              flatListRef.current?.scrollToOffset({
                offset: newX,
                animated: true,
              });
            }}
          />
        </View>
        <View className="mt-4 flex-row justify-center">
          {data?.map((_, index) => {
            return <Dot key={index} index={index} scrollX={scrollX} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const Card = memo(({ item, index, scrollX, onCardPress }: CardProps) => {
  const style = useAnimatedStyle(() => {
    const progress = scrollX.value / SNAP_INTERVAL;

    // distance of this card from the current scroll position
    const distance = index - progress;

    const scale = interpolate(distance, [-1, 0, 1], [0.9, 1, 0.9], Extrapolation.CLAMP);

    const opacity = interpolate(distance, [-1, 0, 1], [0.7, 1, 0.7], Extrapolation.CLAMP);

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: CARD_WIDTH,
          marginHorizontal: SPACING / 2,
          borderRadius: 16,
          backgroundColor: 'white',
        },
        style,
      ]}
      className="relative items-center rounded-3xl bg-white p-8">
      <View
        className={`absolute -top-8 h-20 w-20 items-center justify-center rounded-full border-4 border-white ${
          item?.id === '1' ? 'bg-primary-500' : 'bg-[#0891B2]'
        }`}>
        <Ionicons name="checkmark" size={28} color="#FFF" />
      </View>
      <View className="w-full flex-1 items-center justify-between">
        <View className="mt-10 rounded-full bg-blue-100 p-4">
          <Image source={item.icon} style={{ width: 100, height: 100 }} />
        </View>
        <View className="mt-5">
          <Text className="mb-2 text-center text-2xl text-gray-800" weight="bold">
            {item.title}
          </Text>
          <View className="w-full items-center justify-center px-3">
            {item.description.map((text, idx) => (
              <Text key={idx} className="my-1 text-center text-lg text-gray-600">
                {text}
              </Text>
            ))}
          </View>
        </View>
        <View className="mt-4 w-full">
          <Button title={item?.buttonTitle} onPress={onCardPress} />
        </View>
      </View>
    </Animated.View>
  );
});

const Dot = ({ index, scrollX }: { index: number; scrollX: SharedValue<number> }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * SNAP_INTERVAL,
      index * SNAP_INTERVAL,
      (index + 1) * SNAP_INTERVAL,
    ];

    const scale = interpolate(scrollX.value, inputRange, [0.6, 1.2, 0.6], Extrapolation.CLAMP);

    const opacity = interpolate(scrollX.value, inputRange, [0.5, 1, 0.5], Extrapolation.CLAMP);

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 12,
          height: 12,
          borderRadius: 10,
          backgroundColor: 'white',
          marginHorizontal: 4,
        },
        animatedStyle,
      ]}
    />
  );
};

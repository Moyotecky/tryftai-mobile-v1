import { Ionicons } from '@expo/vector-icons';
import { Text } from '@tryftai/components/atoms/text';
import { useOnboarding } from '@tryftai/hooks/store/useOnboardingStore';
import { Image } from 'expo-image';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const dotImages = [
  require('@tryftai/assets/images/onboarding/dots/1.png'),
  require('@tryftai/assets/images/onboarding/dots/2.png'),
  require('@tryftai/assets/images/onboarding/dots/3.png'),
];

const PAGES = [
  {
    title: 'Smarter Saving',
    subtitle: 'Save with AI',
    description:
      'Goals, vaults, and challenges designed around your habits — guided by your AI copilot.',
    image: require('@tryftai/assets/images/onboarding/1.png'),
    colors: ['#0F766E', '#0891B2'],
  },
  {
    title: 'Explore',
    subtitle: 'Grow Together',
    description:
      'Join squads, build pots, and climb leaderboards with friends who keep you accountable.',
    image: require('@tryftai/assets/images/onboarding/2.png'),
    colors: ['#115E59', '#059669'],
  },
  {
    title: 'Insights That Guide',
    subtitle: 'See the Future',
    description: 'Real-time analytics and cashflow forecasts that nudge you before money runs low.',
    image: require('@tryftai/assets/images/onboarding/3.png'),
    colors: ['#0891B2', '#0F766E'],
  },
];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Screen = () => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { completeOnboarding } = useOnboarding();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const animatedGradientProps = useAnimatedProps<LinearGradientProps>(() => {
    const inputRange = PAGES.map((_, i) => i * width);

    const startColor = interpolateColor(
      scrollX.value,
      inputRange,
      PAGES.map((p) => p.colors[0])
    );

    const endColor = interpolateColor(
      scrollX.value,
      inputRange,
      PAGES.map((p) => p.colors[1])
    );

    return {
      colors: [startColor, endColor] as [string, string], // ✅ tuple satisfies TS
    };
  });

  const handleNext = () => {
    if (currentIndex < PAGES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      completeOnboarding();
      router.navigate('/authentication/get-started.screen');
    }
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <Animated.View className="flex-1">
      <AnimatedLinearGradient
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={PAGES[0].colors as [string, string]}
        animatedProps={animatedGradientProps}
      />
      <SafeAreaView />
      <Animated.FlatList
        data={PAGES}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View className="flex-1 " style={[{ width }]}>
            <View className="w-full flex-[0.1] items-center pt-3">
              <Text className="text-lg text-white" weight="semi_bold">
                {item.title}
              </Text>
            </View>
            <View className="flex-[0.75]">
              <Image
                source={item?.image}
                style={{ width: '100%', height: '100%', flex: 1 }}
                contentFit="contain"
              />
            </View>
            <View className="w-full max-w-[80%] flex-[0.15] justify-center gap-2 px-6 pb-4">
              <Text className="text-4xl text-white" weight="bold">
                {item.subtitle}
              </Text>
              <Text className="text-lg leading-6 text-sky_light-500/90">{item.description}</Text>
            </View>
          </View>
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatListRef}
      />

      {/* Pagination */}

      {/* Footer */}
      <View className="flex-row items-center justify-between rounded-t-3xl bg-black/40 px-4 pb-20 pt-6">
        <View className="flex-row items-center justify-between">
          {PAGES.map((_, i) => {
            const isActive = currentIndex === i;
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => flatListRef.current?.scrollToIndex({ index: i })}
                key={i}
                className="mx-1 h-12 w-12 items-center justify-center overflow-hidden rounded-full"
                style={[
                  isActive && {
                    borderWidth: 2,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Image style={{ width: '100%', height: '100%' }} source={dotImages[i]} />
                {isActive && (
                  <View className="absolute left-0 top-0 h-full w-full items-center justify-center rounded-full bg-black/40">
                    <Ionicons name="checkmark" size={16} color="white" />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity className="rounded-full" activeOpacity={0.9} onPress={handleNext}>
          <LinearGradient
            colors={['#0891B2', '#0F766E']}
            style={{ paddingHorizontal: 25, paddingVertical: 15, borderRadius: 100 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <Text className="font-bold text-white" weight="medium">
              {currentIndex === PAGES.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Screen;

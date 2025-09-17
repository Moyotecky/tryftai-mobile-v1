import React, { useEffect } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface InputProps extends TextInputProps {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, value, onChangeText, ...props }) => {
  const isFocused = useSharedValue(false);

  // Update focus state
  const handleFocus = () => {
    isFocused.value = true;
  };
  const handleBlur = () => {
    if (!value) isFocused.value = false;
  };

  // Animate label
  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(interpolate(isFocused.value ? 1 : 0, [0, 1], [22, 8]), { duration: 200 }),
      fontSize: withTiming(interpolate(isFocused.value ? 1 : 0, [0, 1], [16, 12]), {
        duration: 200,
      }),
      color: isFocused.value ? '#0F766E' : '#9CA3AF',
    };
  });

  useEffect(() => {
    isFocused.value = value ? true : false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="relative my-3 h-[64px] w-full overflow-hidden rounded-xl bg-white">
      <Animated.Text
        style={[
          animatedLabelStyle,
          { position: 'absolute', left: 12, backgroundColor: 'transparent', paddingHorizontal: 2 },
        ]}>
        {label}
      </Animated.Text>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="h-full w-full rounded-md px-4 pt-4 text-base text-black/50"
      />
    </View>
  );
};

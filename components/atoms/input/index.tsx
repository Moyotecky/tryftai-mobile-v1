import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Text } from '../text';
import { InputProps } from './input.types';

export const Input = ({
  label,
  value,
  error,
  onChangeText,
  secureTextEntry,
  ...props
}: InputProps) => {
  const isFocused = useSharedValue(false);

  const [PasswordVisible, setPasswordVisible] = useState(false);

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
      color: isFocused.value ? '#0F766E' : error ? '#ef4444' : '#9CA3AF',
    };
  });

  useEffect(() => {
    isFocused.value = value ? true : false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="my-3">
      <View
        className={`relative h-[64px] w-full overflow-hidden rounded-xl bg-white ${error && 'border border-red-500'}`}>
        <Animated.Text
          style={[
            animatedLabelStyle,
            {
              position: 'absolute',
              left: 12,
              backgroundColor: 'transparent',
              paddingHorizontal: 2,
            },
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
          secureTextEntry={secureTextEntry && !PasswordVisible}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!PasswordVisible)}
            activeOpacity={0.9}
            className="absolute right-2 top-[22%] mr-1 p-2">
            <Ionicons
              name={PasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              className={`${PasswordVisible ? 'text-black' : 'text-gray-400'}`}
              color={PasswordVisible ? '#000' : '#9CA3AF'}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text className="mt-1 pl-2 text-sm text-red-500">{error}</Text> : null}
    </View>
  );
};

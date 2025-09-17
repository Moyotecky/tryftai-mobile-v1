/**
 * components/atoms/button/index.tsx
 *
 * @description
 * A reusable, customizable button component for React Native with a gradient background.
 * This button supports all standard `TouchableOpacity` props and forwards a ref for imperative usage.
 * The gradient colors, text, and other props can be customized via props or extended styles.
 *
 * Features:
 * - Linear gradient background using `expo-linear-gradient`
 * - Forwarded ref for direct access to the TouchableOpacity
 * - Fully typed with TypeScript
 * - Tailwind-style classes for quick styling
 *
 * Usage:
 * ```tsx
 * <Button title="Get Started" onPress={() => console.log('Pressed!')} />
 * ```
 */

import { LinearGradient } from 'expo-linear-gradient';
import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.9}
      {...touchableProps}
      className={`${styles.button} ${touchableProps.className}`}>
      <LinearGradient
        colors={['#0891B2', '#0F766E']}
        style={{
          height: 56,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text className={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

const styles = {
  button: 'items-center rounded-[28px] w-full overflow-hidden',
  buttonText: 'text-white text-lg font-semibold text-center',
};

/**
 * components/atoms/text/index.tsx
 * ----------------------
 *
 * A wrapper around React Native's `<Text>` component.
 *
 * Purpose:
 * - Provides a **single source of truth** for text rendering across the app.
 * - Makes it easier to apply **custom fonts** and global text styles in one place.
 * - Ensures consistency: updating this component automatically updates text everywhere it's used.
 *
 * Props:
 * - Inherits all standard React Native `Text` props.
 * - Supports `className` for Tailwind/NativeWind styling.
 *
 *
 * Author: Victor U.
 * Created: Sept 2025
 */
import { Fonts } from '@tryftai/libs/constants/font';
import { Text as RNText } from 'react-native';
import { type ITextProps } from './text.types';

export const Text: React.FC<ITextProps> = ({ className, style, weight = 'regular', ...props }) => {
  return (
    <RNText
      className={className}
      {...props}
      style={[
        {
          fontFamily: Fonts[weight],
        },
        style,
      ]}
    />
  );
};

Text.displayName = 'Text';

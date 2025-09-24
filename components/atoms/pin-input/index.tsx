import { Fonts } from '@tryftai/libs/constants/font';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../text';
import { PinStyles } from './pinInput.styles';

interface IProps {
  code: string;
  setPinReady: React.Dispatch<React.SetStateAction<boolean>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
  name?: string;
  onChange?: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void>;

  onPress?: () => void;
}
export const PinInput = ({
  code,
  setPinReady,
  setCode,
  maxLength,
  onPress,
  name,
  onChange,
}: IProps) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
  const inputRef = useRef<TextInput>(null);

  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const handlePress = () => {
    setInputContainerIsFocused(true);
    onPress?.();
    inputRef?.current?.focus();
  };
  const handleBlur = () => {
    setInputContainerIsFocused(false);
  };

  const toCodeDigitInput = (_val: number | string, index: number) => {
    const emptyInputChar = ' ';
    const digit = code[index] || emptyInputChar;

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const digitFocusedStyle =
      inputContainerIsFocused && isDigitFocused ? PinStyles.otp_input_focused : {};

    const digitFilledStyle = digit === emptyInputChar ? {} : PinStyles.otp_input_filled;

    return (
      <View
        key={index}
        className="border border-gray-400/20 bg-white"
        style={[PinStyles.otp_input, digitFocusedStyle, digitFilledStyle]}>
        <Text style={{ fontFamily: Fonts.semi_bold, fontSize: 20 }}>{digit}</Text>
      </View>
    );
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <View className="bg-transparent" style={PinStyles.OTPInputSection}>
      <Pressable onPress={handlePress} style={PinStyles.otp_input_container}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </Pressable>
      <TextInput
        autoComplete="sms-otp"
        keyboardType="default"
        autoCapitalize="characters"
        maxLength={maxLength}
        onBlur={handleBlur}
        onChangeText={setCode}
        ref={inputRef}
        returnKeyType="done"
        style={PinStyles.hiddenTextInput}
        textContentType="oneTimeCode"
        value={code}
      />
    </View>
  );
};

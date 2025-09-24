import { Colors } from '@tryftai/libs/constants/color';
import { StyleSheet } from 'react-native';

export const PinStyles = StyleSheet.create({
  hiddenTextInput: {
    height: 1,
    opacity: 0,
    position: 'absolute',
    width: 1,
  },
  OTPInputSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  otp_input_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  otp_input: {
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    height: 70,
    justifyContent: 'center',
    padding: 10,
    width: 60,
  },
  otp_input_text: {
    color: Colors.light.primary,
    fontSize: 22,
    textAlign: 'center',
  },
  otp_input_focused: {
    borderColor: Colors.light.primary,
  },
  otp_input_filled: {},
});

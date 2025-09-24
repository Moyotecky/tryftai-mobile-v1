import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack initialRouteName="get-started.screen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="get-started.screen" />
      <Stack.Screen name="sign-in.screen" />
      <Stack.Screen name="choose-plan.screen" />
      <Stack.Screen name="create-payment-pin.screen" />
      <Stack.Screen name="forgot-password.screen" />
      <Stack.Screen name="reset-password.screen" />
      <Stack.Screen name="personal-info.screen" />
      <Stack.Screen name="sign-up.screen" />
      <Stack.Screen name="verify-email.screen" />
    </Stack>
  );
};

export default Layout;

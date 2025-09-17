import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack initialRouteName="get-started.screen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="get-started.screen" />
      <Stack.Screen name="sign-in.screen" />
    </Stack>
  );
};

export default Layout;

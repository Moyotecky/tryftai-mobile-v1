import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="account-details" />
      <Stack.Screen name="scan-qr" />
      <Stack.Screen name="summary" />
      <Stack.Screen name="your-qr" />
    </Stack>
  );
};

export default Layout;

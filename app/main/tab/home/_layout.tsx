import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack initialRouteName="home.screen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home.screen" />
    </Stack>
  );
};

export default Layout;

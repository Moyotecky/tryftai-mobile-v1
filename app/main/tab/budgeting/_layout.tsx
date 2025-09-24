import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack initialRouteName="budgeting.screen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="budgeting.screen" />
    </Stack>
  );
};

export default Layout;

import { Button } from '@tryftai/components/atoms/button';
import { Container } from '@tryftai/components/molecules/container';
import { router, Stack } from 'expo-router';

import { Text, View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <Container>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className={styles.container}>
        <Text className={styles.title}>{"This screen doesn't exist."}</Text>
        <Button title="Take me back!" onPress={() => router.replace('/(check-update)')} />
      </View>
    </Container>
  );
};

export default NotFoundScreen;

const styles = {
  container: `items-center flex-1 justify-center p-5`,
  title: `text-xl font-bold`,
  link: `mt-4 pt-4`,
};

import { Button } from '@tryftai/components/atoms/button';
import { Container } from '@tryftai/components/molecules/container';
import { useOnboarding } from '@tryftai/hooks/store/useOnboardingStore';
import { Text } from 'react-native';

const Screen = () => {
  const { reset } = useOnboarding();
  return (
    <Container>
      <Text>Screen</Text>
      <Button
        title="Reset Onboarding State"
        onPress={() => {
          reset();
        }}
      />
    </Container>
  );
};

export default Screen;

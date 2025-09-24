import { Button, Text } from '@tryftai/components/atoms';
import { Card } from '@tryftai/components/molecules';
import CreditScore from './Arc';

const Score = () => {
  return (
    <Card className="% mt-10">
      <Text className="mt-5 text-center text-xl text-primary-500" weight="semi_bold">
        My Score
      </Text>
      <Text className="mt-5 text-center text-2xl" weight="bold">
        You’re doing great!
      </Text>

      <CreditScore />

      <Text className="mx-auto text-center text-lg" weight="regular" style={{ width: '75%' }}>
        You have a great savings score, <Text weight="semi_bold">up 24 points</Text> since last
        month.
      </Text>
      <Button
        title="Learn more"
        style={{ width: '40%', marginHorizontal: 'auto', marginVertical: 16 }}
      />
    </Card>
  );
};

export { Score };

import { Button, Text } from '@tryftai/components/atoms';
import { TopExpenses } from '@tryftai/components/modules/home';
import { BudgetGauge } from '@tryftai/components/modules/summary/Arc';
import { BackHeader, Card } from '@tryftai/components/molecules';
import { GradientBg } from '@tryftai/components/molecules/gradient-bg';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = () => {
  return (
    <SafeAreaView>
      <GradientBg bottomFill="#F6F7F8" />
      <BackHeader title="Summary" containerClassName="text-white" titleClassName="text-white" />
      <ScrollView contentContainerClassName="">
        <View className="">
          <Card className="relative z-10 m-4 h-[400]">
            <View className="items- flex gap-5 py-3">
              <Text className="text-center text-3xl" weight="semi_bold">
                {' '}
                November 2025{' '}
              </Text>
              <BudgetGauge value={94008} max={240000} />

              <Text className="text-center text-lg" weight="medium">
                {' '}
                Your expense is under control{' '}
              </Text>
              <Button title="Learn more" className="w-5/12 self-center  " />
            </View>
          </Card>
          <View className="relative -top-[80] -z-0 bg-[#F6F7F8] p-4 pt-[100]">
            <TopExpenses />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;

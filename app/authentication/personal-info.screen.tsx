import { Ionicons } from '@expo/vector-icons';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { LocationIcon } from '@tryftai/assets/icons/LocationIcon';
import { Button } from '@tryftai/components/atoms/button';
import { Input } from '@tryftai/components/atoms/input';
import { Text } from '@tryftai/components/atoms/text';
import { Sheet, useSheetRef } from '@tryftai/components/molecules/bottom-sheet';

import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const steps = [
  {
    title: 'Personal info',
    description: 'We ask for your personal information to verify your application details.',
  },
  {
    title: 'Create Password',
    description: 'Choose a secure password that will be easy for you to remember.',
  },
  {
    title: 'Home address',
    description: 'Complete your account verification to start investing.',
  },
  {
    title: 'Date of Birth',
    description: 'Enter your date of birth',
  },
  {
    title: 'Almost there!',
    description: 'Please take a moment to ensure all of the information you provide is correct.',
  },
];

const Screen = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // submit form
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      if (router.canGoBack()) {
        router.back();
      }
    }
  };

  const getProgressStep = () => {
    if (currentStep === 0) return 1;
    if (currentStep === 1) return null;
    return currentStep;
  };

  return (
    <SafeAreaView className="flex-1 bg-background_light-300">
      <View className="mt-2 flex-row justify-between px-4 py-4">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            handlePreviousStep();
          }}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        {currentStep !== 1 && (
          <View className="rounded-full bg-white px-5 py-3">
            <Text weight="semi_bold">
              Step {getProgressStep()} of {steps.length - 1}
            </Text>
          </View>
        )}
      </View>
      <KeyboardAwareScrollView className="flex-1" contentContainerClassName="flex-grow">
        {currentStep === 1 ? (
          <View className="h-2/6 items-center justify-center">
            <Image
              source={require('@tryftai/assets/images/auth/create-password/illustration.png')}
              className="h-40 w-40"
            />
          </View>
        ) : null}
        <View className={`justify-between px-6 pt-5 ${currentStep === 1 ? 'h-4/6' : 'h-full'}`}>
          <View className="gap-2">
            <Text weight="bold" className="text-4xl text-dark_blue-500">
              {steps[currentStep].title}
            </Text>
            <Text className="text-lg leading-6 text-ink-500" weight="medium">
              {steps[currentStep].description}
            </Text>
          </View>
          <View className="mt-5 flex-1 gap-3">
            {currentStep === 0 ? (
              <StepOne />
            ) : currentStep === 1 ? (
              <StepTwo />
            ) : currentStep === 2 ? (
              <StepThree />
            ) : currentStep === 3 ? (
              <StepFour />
            ) : currentStep === 4 ? (
              <StepFive />
            ) : null}
          </View>

          <View className="gap-4 pb-6">
            <Button title="Continue" onPress={handleNextStep} disabled={false} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Screen;

const StepOne = () => {
  return (
    <View>
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="University / Institution" />
      <Input label="Phone Number" />
      <View className="mt-3 pl-1">
        <Text className="text-sm text-ink-500">
          We use 128-bit encryption for security, and this is only used for identity verification
          purpose.
        </Text>
      </View>
    </View>
  );
};

const validationCriteria = [
  { index: 0, value: '8 characters' },
  { index: 1, value: 'Has an uppercase letter or symbol' },
  { index: 2, value: 'Has a number' },
];

const StepTwo = () => {
  const [password, setPassword] = useState('');

  const [validations, setValidations] = useState<boolean[]>(
    Array(validationCriteria.length).fill(false)
  );

  useEffect(() => {
    const updatedValidations = [
      password.length >= 8,
      /[A-Z]|[^A-Za-z0-9]/.test(password),
      /\d/.test(password),
    ];
    setValidations(updatedValidations);
  }, [password]);

  return (
    <View>
      <Input label="Password" value={password} onChangeText={setPassword} />
      <View className="mt-2 gap-3">
        {validationCriteria.map((item) => (
          <View key={item.index} className="flex-row items-center gap-2">
            <Ionicons
              name="checkmark"
              size={18}
              color={validations[item.index] ? 'green' : 'gray'}
            />
            <Text>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const StepThree = () => {
  const searchAddressSheetRef = useSheetRef();

  return (
    <View className="flex-1">
      <Input
        label="Street Address"
        editable={false}
        onPress={() => {
          searchAddressSheetRef?.current?.present();
        }}
      />
      <Sheet ref={searchAddressSheetRef} snapPoints={['90%']}>
        <View className="p-4">
          <View className="flex-row items-center gap-3 rounded-full bg-[#EEF0F2] px-3">
            <View className="pl-2">
              <Ionicons name="search" size={16} className="text-gray-400" />
            </View>
            <BottomSheetTextInput
              placeholder="Search Address"
              className="flex-1 py-5 text-base leading-5"
            />
            <View className="items-center justify-center rounded-full bg-white p-3">
              <Ionicons name="close" size={16} className="text-gray-400" />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <LocationIcon />
            </TouchableOpacity>
          </View>
        </View>
      </Sheet>
    </View>
  );
};

const StepFour = () => {
  return (
    <View>
      <Input label="Date of Birth (MM / DD / YYYY)" />
    </View>
  );
};

const StepFive = () => {
  return (
    <View>
      <View className="gap-4">
        <View className="flex-row items-center justify-between border-b border-b-gray-200 py-4">
          <View className="flex-[0.8] gap-3">
            <Text className="text-[#363D4E]" weight="semi_bold">
              Full Legal Name
            </Text>
            <Text className="text-[#040C22]" weight="bold">
              John Abraham
            </Text>
          </View>
          <TouchableOpacity className="rounded-full bg-white px-7 py-4">
            <Text className="text-sm" weight="bold">
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between border-b border-b-gray-200 py-4">
          <View className="flex-[0.8] gap-3">
            <Text className="text-[#363D4E]" weight="semi_bold">
              Date of Birth
            </Text>
            <Text className="text-[#040C22]" weight="bold">
              28 May 1992
            </Text>
          </View>
          <TouchableOpacity className="rounded-full bg-white px-7 py-4">
            <Text className="text-sm" weight="bold">
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between border-b border-b-gray-200 py-4">
          <View className="flex-[0.8] gap-3">
            <Text className="text-[#363D4E]" weight="semi_bold">
              Social Security Number
            </Text>
            <Text className="text-[#040C22]" weight="bold">
              *8349
            </Text>
          </View>
          <TouchableOpacity className="rounded-full bg-white px-7 py-4">
            <Text className="text-sm" weight="bold">
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between py-4">
          <View className="flex-[0.8] gap-3">
            <Text className="text-[#363D4E]" weight="semi_bold">
              Residential Address
            </Text>
            <Text className="text-[#040C22]" weight="bold">
              428 Greenwich Ave #29A, Brooklyn, NY 11239
            </Text>
          </View>
          <TouchableOpacity className="rounded-full bg-white px-7 py-4">
            <Text className="text-sm" weight="bold">
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

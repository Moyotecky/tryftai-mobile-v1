import { Ionicons } from '@expo/vector-icons';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UpdateProfileRequest,
  UpdateProfileRequestSchema,
} from '@tryftai/api/contracts/auth/update-profile.contract';
import { useUpdateProfile } from '@tryftai/api/hooks/auth/useUpdateProfile.hook';
import { LocationIcon } from '@tryftai/assets/icons/LocationIcon';
import { Button } from '@tryftai/components/atoms/button';
import { Input } from '@tryftai/components/atoms/input';
import { FormInput } from '@tryftai/components/atoms/input/form-input';
import { Text } from '@tryftai/components/atoms/text';
import { Sheet, useSheetRef } from '@tryftai/components/molecules/bottom-sheet';
import { useAuthUserStore } from '@tryftai/hooks/store/useAuthUserStore';
import { formatApiError } from '@tryftai/libs/utils/error-handler';
import { Notify } from '@tryftai/libs/utils/toast.config';

import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm, UseFormReturn, useWatch } from 'react-hook-form';
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

const validationCriteria = [
  { index: 0, value: '8 characters' },
  { index: 1, value: 'Has an uppercase letter or symbol' },
  { index: 2, value: 'Has a number' },
];

const Screen = () => {
  const { accountType } = useLocalSearchParams<{ accountType: string }>();
  const [isProfileCreatedSuccessfulModalOpen, setIsProfileCreatedSuccessfulModalOpen] =
    useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const updateProfileMutation = useUpdateProfile();

  const { updateUser } = useAuthUserStore();

  const form = useForm<UpdateProfileRequest>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(UpdateProfileRequestSchema),
  });

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      if (currentStep === 1) {
        form.handleSubmit((values) => {
          updateProfileMutation.mutate(
            { ...values, accountType: accountType ?? '' },
            {
              onSuccess: (data) => {
                console.log('Profile updated', data);
                updateUser(data);
                setCurrentStep((prev) => prev + 1);
                Notify('success', {
                  message: 'Profile Updated',
                  description: 'Your profile has been updated successfully',
                });
              },
              onError: (err) => {
                console.log(err);
                Notify('error', {
                  message: 'Profile Update Failed',
                  description: formatApiError(err),
                });
              },
            }
          );
        })();
      } else if (currentStep === 5) {
        // form.handleSubmit((values) => {
        //   submitKycMutation.mutate(values, {
        //     onSuccess: (data) => {
        //       console.log('KYC submitted', data);
        //       setIsProfileCreatedSuccessfulModalOpen(true);
        //     },
        //     onError: (err) => {
        //       Notify('error', {
        //         message: 'KYC Submission Failed',
        //         description: formatApiError(err),
        //       });
        //     },
        //   });
        // })();
      } else {
        // Normal step, just move forward
        setCurrentStep((prev) => prev + 1);
      }
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
              <StepOne control={form} />
            ) : currentStep === 1 ? (
              <StepTwo control={form} />
            ) : currentStep === 2 ? (
              <StepThree control={form} />
            ) : currentStep === 3 ? (
              <StepFour control={form} />
            ) : currentStep === 4 ? (
              <StepFive control={form} />
            ) : null}
          </View>

          <View className="gap-4 pb-6">
            <Button
              title="Continue"
              onPress={handleNextStep}
              isLoading={updateProfileMutation.isPending}
              disabled={false}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {isProfileCreatedSuccessfulModalOpen ? (
        <View className="absolute left-0 top-0 z-10 h-full w-full bg-black/40 p-4">
          <View className="h-[70%] rounded-full bg-white p-5">
            <View>
              <Image
                source={require('@tryftai/assets/images/auth/personal-info/illustration.png')}
                className="h-40 w-40"
              />
            </View>
            <View>
              <Text>Congratulations</Text>
              <Text>Profile created sucessfully</Text>
              <Text>
                Welcome onboard, you&apos;ve finally created your TryftAI account, the journey
                starts here.
              </Text>
            </View>
            <Button
              title="I'm ready to start"
              onPress={() => {
                setIsProfileCreatedSuccessfulModalOpen(false);
                router.replace('/home');
              }}
            />
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Screen;

interface StepFormProps {
  control: UseFormReturn<{
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    occupation?: string | undefined;
    schoolUniversity?: string | undefined;
  }>;
}

const StepOne: React.FC<StepFormProps> = (props) => {
  const { currentUser } = useAuthUserStore();
  return (
    <View>
      <FormInput
        label="First Name"
        name="firstName"
        control={props?.control?.control}
        error={props?.control?.formState?.errors?.firstName?.message}
      />
      <FormInput
        label="Last Name"
        name="lastName"
        control={props?.control?.control}
        error={props?.control?.formState?.errors?.lastName?.message}
      />
      {currentUser?.accountType?.toLowerCase() === 'student' ? (
        <FormInput
          label="University / Institution"
          name="schoolUniversity"
          control={props?.control?.control}
          error={props?.control?.formState?.errors?.schoolUniversity?.message}
        />
      ) : (
        <FormInput
          label="Occupation"
          name="occupation"
          control={props?.control?.control}
          error={props?.control?.formState?.errors?.occupation?.message}
        />
      )}
      <FormInput
        label="Phone Number"
        name="phoneNumber"
        control={props?.control?.control}
        error={props?.control?.formState?.errors?.phoneNumber?.message}
      />
      <View className="mt-3 pl-1">
        <Text className="text-sm text-ink-500">
          We use 128-bit encryption for security, and this is only used for identity verification
          purpose.
        </Text>
      </View>
    </View>
  );
};

const StepTwo: React.FC<StepFormProps> = (props) => {
  const [validations, setValidations] = useState<boolean[]>(
    Array(validationCriteria.length).fill(false)
  );

  const password = useWatch({ control: props?.control?.control, name: 'password' }) ?? '';

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
      <FormInput
        label="Password"
        name="password"
        control={props?.control?.control}
        error={props?.control?.formState?.errors?.phoneNumber?.message}
      />
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

const StepThree: React.FC<StepFormProps> = (props) => {
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
          <View className="mb-5">
            <Text weight="semi_bold" className="text-center text-lg">
              Search address
            </Text>
          </View>
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
            <TouchableOpacity activeOpacity={0.9} className="my-3 flex-row items-center gap-2 py-4">
              <LocationIcon />
              <Text className="text-lg text-primary-500" weight="semi_bold">
                Current location
              </Text>
            </TouchableOpacity>
            <View className="h-64 w-full rounded-2xl bg-gray-200" />
            <View className="mt-5">
              <Text className="text-lg text-primary-500" weight="semi_bold">
                Address
              </Text>
              {/* <BottomSheetFlashList
                data={[
                  { title: '428 Greenwich Ave', location: 'Brooklyn, NY' },
                  { title: '285 Greenwich Village', location: 'Hermosa Beach, CA' },
                  { title: '89 Greenwich Drive', location: 'Manhattan, NY' },
                  { title: '65 Greenwich West', location: 'New York, NY' },
                ]}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                  <View className="flex-row items-center justify-between border-b border-b-gray-200 py-4">
                    <View className="flex-[0.8] gap-3">
                      <Text className="text-[#363D4E]" weight="semi_bold">
                        {item.title}
                      </Text>
                      <Text className="text-[#040C22]" weight="bold">
                        {item.location}
                      </Text>
                    </View>
                    <TouchableOpacity className="rounded-full bg-white px-7 py-4">
                      <Ionicons name="chevron-forward" size={16} />
                    </TouchableOpacity>
                  </View>
                )}
              /> */}
            </View>
          </View>
        </View>
      </Sheet>
    </View>
  );
};

const StepFour: React.FC<StepFormProps> = (props) => {
  return (
    <View>
      <Input label="Date of Birth (MM / DD / YYYY)" />
    </View>
  );
};

const StepFive: React.FC<StepFormProps> = (props) => {
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

import { UpdateProfileRequest } from '@tryftai/api/contracts/auth/update-profile.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useUpdateProfile = createMutationHook(
  'useUpdateProfile',
  (requestBody: UpdateProfileRequest) => ApiClient.call('auth', 'updateProfile', requestBody)
);

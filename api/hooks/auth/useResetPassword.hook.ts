import { ResetUserPasswordRequest } from '@tryftai/api/contracts/auth/reset-user-account-password.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useResetUserPassword = createMutationHook(
  'useResetUserPassword',
  (requestBody: ResetUserPasswordRequest) => ApiClient.call('auth', 'resetPassword', requestBody)
);

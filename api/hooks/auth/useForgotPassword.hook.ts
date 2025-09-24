import { ForgotUserPasswordRequest } from '@tryftai/api/contracts/auth/forgot-user-account-password.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useForgetUserPassword = createMutationHook(
  'useForgetUserPassword',
  (requestBody: ForgotUserPasswordRequest) => ApiClient.call('auth', 'forgotPassword', requestBody)
);

import { RegisterUserEmailRequest } from '@tryftai/api/contracts/auth/register-user-account.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useRegisterUserAccount = createMutationHook(
  'useRegisterUserAccount',
  (requestBody: RegisterUserEmailRequest) => ApiClient.call('auth', 'registerEmail', requestBody)
);

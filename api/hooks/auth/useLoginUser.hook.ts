import { LoginUserEmailRequest } from '@tryftai/api/contracts/auth/login-user-account.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useLoginUserAccount = createMutationHook(
  'useLoginUserAccount',
  (requestBody: LoginUserEmailRequest) => ApiClient.call('auth', 'login', requestBody)
);

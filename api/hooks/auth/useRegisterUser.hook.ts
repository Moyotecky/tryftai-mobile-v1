import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useRegisterUserAccount = createMutationHook('useRegisterUserAccount', () =>
  ApiClient.call('auth', 'registerEmail')
);

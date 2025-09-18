import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useLoginUserAccount = createMutationHook('useLoginUserAccount', () =>
  ApiClient.call('auth', 'login')
);

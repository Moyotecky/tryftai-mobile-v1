import { UpdateAccountTypeRequest } from '@tryftai/api/contracts/auth/update-account-type.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useUpdateAccountType = createMutationHook(
  'useUpdateAccountType',
  (requestBody: UpdateAccountTypeRequest) =>
    ApiClient.call('auth', 'updateAccountType', requestBody)
);

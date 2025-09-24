import { VerifyOtpRequest } from '@tryftai/api/contracts/auth/verify-otp.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useVerifyOtp = createMutationHook('useVerifyOtp', (requestBody: VerifyOtpRequest) =>
  ApiClient.call('auth', 'verifyOtp', requestBody)
);

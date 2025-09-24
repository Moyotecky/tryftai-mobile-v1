import { ResendOtpRequest } from '@tryftai/api/contracts/auth/resend-otp.contract';
import { createMutationHook } from '@tryftai/api/hookfactory';
import { ApiClient } from '@tryftai/api/services';

export const useResendOtp = createMutationHook('useResendOtp', (requestBody: ResendOtpRequest) =>
  ApiClient.call('auth', 'resendOtp', requestBody)
);
